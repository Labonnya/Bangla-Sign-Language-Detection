import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formData: any;

  constructor(private formDataService: FormDataService) { }

  ngOnInit(): void {
    const typed = new Typed('.typing', {
      strings: ['BanglaSignQuest'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    this.formDataService.fetchVideoData();
    this.formData = this.formDataService.getFormData();
  }
}
