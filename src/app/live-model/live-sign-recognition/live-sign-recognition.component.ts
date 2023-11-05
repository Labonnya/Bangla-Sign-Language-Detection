import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-sign-recognition',
  templateUrl: './live-sign-recognition.component.html',
  styleUrls: ['./live-sign-recognition.component.css']
})
export class LiveSignRecognitionComponent implements OnInit{
  videoUrl:string = "";

  constructor(private httpClient : HttpClient){
    this.videoUrl = 'http://localhost:8086/'; // Replace with the actual URL
  }

  ngOnInit(): void {
    this.updateVideoStream();
  }

  updateVideoStream() {
    const videoElement = document.getElementById('videoStream') as HTMLImageElement;
    videoElement.src = this.videoUrl;
    setTimeout(() => this.updateVideoStream(), 1000); // Update the image every 1 second
  }
}
