import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-model',
  templateUrl: './live-model.component.html',
  styleUrls: ['./live-model.component.css']
})
export class LiveModelComponent {
  camera_link: string = "http://192.168.0.100:4747/";

  constructor(private httpClient : HttpClient){}

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
