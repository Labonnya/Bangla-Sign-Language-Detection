from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
import cv2
from sign_recognition import *
import threading

app = FastAPI()
frame_skip = 10
camera = cv2.VideoCapture("http://192.168.0.100:4747/video")  # You can specify your camera index or video source
handDetector = HandDetector()

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

if __name__ == "__main__":
    import uvicorn
    video_thread = threading.Thread(target=generate_frames)
    video_thread.start()
    uvicorn.run(app, host="0.0.0.0", port=8000)

