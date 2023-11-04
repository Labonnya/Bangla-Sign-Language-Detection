import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../services/course-data-service.service';
import { Course } from '../models/course.model'; // Import the Course model
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseDataService: CourseDataService, private router: Router) {}

  ngOnInit(): void {
    this.courses = this.courseDataService.getCourses();
  }

  enroll(courseId: number): void {
    // Navigate to the enroll course component with the courseId as a route parameter
    this.router.navigate(['/enroll', courseId]);
  }
}
