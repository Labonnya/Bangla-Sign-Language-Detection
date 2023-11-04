import { Component } from '@angular/core';
import { CourseDataService } from '../services/course-data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css'],
})
export class EnrollCourseComponent {
  studentName: string = '';
  courseId: number | null = null; // Initialize courseId as null

  private routeSubscription: Subscription;

  constructor(private dataService: CourseDataService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = this.route.paramMap.subscribe((paramMap) => {
      this.courseId = paramMap.has('id') ? +paramMap.get('id')! : null;
    });
  }

  enrollCourse(): void {
    if (this.courseId !== null) {
      if (this.studentName.trim() !== '') {
        this.dataService.enrollStudent(this.courseId, this.studentName);
        this.router.navigate(['/courses']);
      } else {
        alert('Please enter your name before enrolling.');
      }
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe(); // Don't forget to unsubscribe to avoid memory leaks
  }
}
