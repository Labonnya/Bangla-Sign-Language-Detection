import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../services/course-data-service.service';
import { Certificate } from '../models/certificate.model';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private dataService: CourseDataService) {}

  ngOnInit(): void {
    this.certificates = this.dataService.getCertificates();
  }

  getCourseTitle(courseId: number): string {
    const course = this.dataService.getCourseById(courseId);
    return course ? course.title : 'Unknown Course';
  }
}
