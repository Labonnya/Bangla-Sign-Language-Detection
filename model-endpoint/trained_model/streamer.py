from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
import cv2
import threading
from cvzone.ClassificationModule import Classifier
from trained_model.video_similarity import calculate_video_similarity
from pydantic import BaseModel


app = FastAPI()
frame_skip = 10
camera = cv2.VideoCapture("http://192.168.0.100:4747/video")  # You can specify your camera index or video source
VIDEO_STREAM_LINK = 'http://192.168.0.100:4747/video'
classifier = Classifier("keras_model.h5", "labels.txt")
CLASSES = [
    "Chandra Bindu",
    "Anusshar",
    "Bisharga",
    "Ka",
    "Kha",
    "Ga",
    "Gha",
    "Uo",
    "Ca",
    "Cha",
    "Jha",
    "Yo",
    "Ta",
    "Thha",
    "Do",
    "Dho",
    "Tha",
    "Da",
    "Dha",
    "Pa",
    "fa",
    "Ma",
    "La",
    "Ha",
    "Borgio Ja/Anta Ja",
    "Murdha Na/Donta Na",
    "Ta/Khanda Ta",
    "Ba/Bha",
    "Ba-y Ra/Da-y Ra/Dha-y Ra",
    "Talobbo sha/Danta sa/Murdha Sha"
]

class VideoSimilarityRequest(BaseModel):
    tutorial_uri: str
    performance_video_uri: str
    selected_model_name: str 

def generate_frames():
    frame_number = 0
    prediction = [0]
    index = 0
    while True:
        success, frame = camera.read()
        if not success: 
            print(f"Failed to read frame from video stream {VIDEO_STREAM_LINK}")
            break
        frame_number+=1

        if frame_number % frame_skip == 0:
            prediction, index = classifier.getPrediction(frame)
        else: 
            cv2.putText(frame, f"{CLASSES[index]}, {prediction[index]}", (50, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,0,255), 1)
        #cv2.rectangle(frame, (x,y), (x+w, y+h), (255,0,255), 2)

        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            break
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            

@app.get("/")
async def read_root(request: Request):
    return StreamingResponse(generate_frames(), media_type="multipart/x-mixed-replace; boundary=frame")

@app.post("/api/v1/video/similarity", response_model=float)
async def video_similarity(videos : VideoSimilarityRequest):
    return calculate_video_similarity(videos.tutorial_uri, videos.performance_video_uri)

if __name__ == "__main__":
    import uvicorn
    video_thread = threading.Thread(target=generate_frames)
    video_thread.start()
    uvicorn.run(app, host="0.0.0.0", port=8000)

