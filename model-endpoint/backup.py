from fastapi import FastAPI, Request;
from urllib.parse import unquote
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from fastapi.responses import JSONResponse
from fastapi.responses import StreamingResponse
import cv2
import threading
import datetime
import tensorflow as tf
import numpy as np
#from trained_model.sign_recognition import predict_sign
from trained_model.video_similarity import calculate_video_similarity
from trained_model.sign_similarity import calculate_image_sign_similarity

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this with the origins that should be allowed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class VideoSimilarityRequest(BaseModel):
    tutorial_uri: str
    performance_video_uri: str
    selected_model_name: str 

class ImageSimilarityRequest(BaseModel):
    tutorial_uri: str
    performance_image_uri: str
    selected_model_name: str 

class SignRecognitionRequest(BaseModel):
    sign_image_uri: str
    selected_model_name: str

class SetCameraURLRequest(BaseModel):
    camera_url: str
class SetModelRequest(BaseModel):
    model_code: str

frame_skip = 10
recording = False
video_file_name = "default.mp4"
VIDEO_STREAM_LINK = 'http://192.168.0.100:4747/video' # You can specify your camera index or video source
camera = cv2.VideoCapture(VIDEO_STREAM_LINK)  
classifier = tf.keras.models.load_model("trained_model/image_based_sign_recognition_on_5word_dataset.h5")
CLASSES = [
   "Hasha", "Hospital","Oshustho", "Oushodh", "Telephone"
]

def generate_frames():
    frame_number = 0
    predictions = [[0]]
    index = 0
    out = None

            
    while True:
        success, frame = camera.read()
        if not success: 
            print(f"Failed to read frame from video stream {VIDEO_STREAM_LINK}")
            break
        frame_number += 1

        if recording:
            # Initialize the VideoWriter if it's None or the video file name has changed
            if out is None or video_file_name != out.getVideoFileWriter():
                if out is not None:
                    out.release()
                out = cv2.VideoWriter(video_file_name)

        if frame_number % frame_skip == 0:
            image = cv2.resize(frame, (128, 128))
            image = np.array(image, dtype='float32') / 255.0
            image = image.reshape((1, 128, 128, 3))  # Reshape to match the model's input shape
            predictions = classifier.predict(image)
            index = np.argmax(predictions, axis=-1)[0]  # Get the index of the class with the highest probability
        else:
            #print(predictions[0][index])
            if predictions[0][index]>0.75:
                cv2.putText(frame, f"{CLASSES[index]}, {predictions[0][index]}", (50, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,0,255), 1)
            else: 
                cv2.putText(frame, f"No known sign , {100-predictions[0][index]}", (50, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,0,255), 1)

        if recording and out is not None:    
            out.write(cv2.resize(frame, (640, 480)))

        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            break
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.get("/")
async def read_root(request: Request):
    return StreamingResponse(generate_frames(), media_type="multipart/x-mixed-replace; boundary=frame")

@app.get("/api/v1/camera/start_recording")
async def start_recording():
    global video_file_name
    global recording
    video_file_name = "data/"+str(datetime.datetime.now())+".mp4"
    recording = True
    return {"message": "Recording started"}

@app.get("/api/v1/camera/stop_recording")
async def stop_recording():
    global recording
    recording = False
    return {"message": "Recording stopped", "video_url":video_file_name}

@app.post("/api/v1/camera/set", response_model=str)
async def set_camera(camera: SetCameraURLRequest):
    VIDEO_STREAM_LINK = camera.camera_url
    return "Successfully set camera url"

@app.post("/api/v1/model/set", response_model=str)
async def set_model(model_name: SetModelRequest):
    if model_name.model_code=="5WordModel":
        classifier = tf.keras.models.load_model("trained_model/image_based_sign_recognition_on_5word_dataset.h5")

    return "Successfully set Model"

@app.post("/api/v1/video/similarity", response_model=float)
async def video_similarity(videos : VideoSimilarityRequest):
    print(str(videos))
    return calculate_video_similarity(videos.tutorial_uri, videos.performance_video_uri)

@app.post("/api/v1/image/recognize/sign", response_model=str)
async def recognize_sign(request: SignRecognitionRequest):
    return predict_sign(request.sign_image_uri)

@app.post("/api/v1/image/similarity", response_model=str)
async def image_similarity(images: ImageSimilarityRequest):
    return f"{calculate_image_sign_similarity(images.tutorial_uri, images.performance_image_uri)}"
