import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-model',
  templateUrl: './live-model.component.html',
  styleUrls: ['./live-model.component.css']
})
export class LiveModelComponent {
  camera_link: string = "http://192.168.0.100:4747/";
  videoUrl: string;


  constructor(private httpClient : HttpClient){
    this.videoUrl = 'http://localhost:8000/'; // Replace with the actual URL
  }


  ngOnInit(): void {
    this.updateVideoStream();
  }

  updateVideoStream() {
    const videoElement = document.getElementById('videoStream') as HTMLImageElement;
    videoElement.src = this.videoUrl;
    setTimeout(() => this.updateVideoStream(), 1000); // Update the image every 1 second
  }

  set_camera_address(){
    const data = {
      "camera_url": this.camera_link
    };
    this.httpClient.post('http://localhost:8086/api/v1/camera/set',data) //https://api.agify.io?name=abhijit
    .subscribe((response)=>{
      console.log(response);
    });
  }
}
