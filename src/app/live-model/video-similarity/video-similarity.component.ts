import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-similarity',
  templateUrl: './video-similarity.component.html',
  styleUrls: ['./video-similarity.component.css']
})
export class VideoSimilarityComponent {
  status: string = "";
  recorded_video_url: string = "";
  tutorial_video_url: string = "";
  video_similarity_score: string = "";

  constructor(private httpClient: HttpClient){}

  start_recording(){
    this.httpClient.get<any>("http://localhost:8086/api/v1/camera/start_recording")
    .subscribe((response)=>{
      this.status = response.message;
    })
  }
  stop_recording(){
    this.httpClient.get<any>("http://localhost:8086/api/v1/camera/stop_recording")
    .subscribe((response)=>{
      this.status = response.message;
      this.recorded_video_url = response.video_url;
    })
  }

  calculate_video_similarity(){
    const data = {
      tutorial_uri: this.tutorial_video_url,
      performance_video_uri: this.recorded_video_url,
      selected_model_name: "uwu"
    }
    this.video_similarity_score = "Calculating...";
    this.httpClient.post<any>("http://localhost:8086/api/v1/video/similarity", data)
    .subscribe((response)=>{
      console.log(response);
      this.video_similarity_score = response;
    })
  }
}
