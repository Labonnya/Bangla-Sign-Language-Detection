from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
import cv2

app = FastAPI()

camera = cv2.VideoCapture("http://192.168.0.100:4747/video")  # You can specify your camera index or video source

def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            print(f"FAILED TO READ camera")
            break
        else:
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
    uvicorn.run(app, host="0.0.0.0", port=8000)

