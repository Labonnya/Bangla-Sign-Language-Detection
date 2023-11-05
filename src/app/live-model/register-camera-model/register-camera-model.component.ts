import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-camera-model',
  templateUrl: './register-camera-model.component.html',
  styleUrls: ['./register-camera-model.component.css']
})
export class RegisterCameraModelComponent {

  constructor(private httpClient: HttpClient){}
  camera_link: string = "http://192.168.0.100:4747/video";
  selected_model: string = "";
  models = [ // DONT CHANGE NAMES
    {id: 1, name: "5WordModel"},
    {id: 2, name: "KU-BdSL"}
 ];

  set_camera_address(){
    const data = {
      "camera_url": this.camera_link
    };
    this.httpClient.post('http://localhost:8086/api/v1/camera/set',data) //https://api.agify.io?name=abhijit
    .subscribe((response)=>{
      console.log(response);
    });
  }

  set_model_for_sign_recognition(){
    const data = {
      "model_code": this.selected_model
    };
    this.httpClient.post('http://localhost:8086/api/v1/model/set',data) //https://api.agify.io?name=abhijit
    .subscribe((response)=>{
      console.log(response);
    });
  }
}
