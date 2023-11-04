import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent implements OnInit {
  availableCourses: any[] = [];
  enrolledCourses: any[] = []; // Store enrolled courses in local storage
  completedCourses: any[] = []; // Store completed courses in local storage
  user: any;

  constructor(private courseService: CourseService) {
    // Retrieve enrolled and completed courses from local storage on component initialization
    const storedEnrolledCourses = localStorage.getItem('enrolledCourses');
    if (storedEnrolledCourses) {
      this.enrolledCourses = JSON.parse(storedEnrolledCourses);
    }

    const storedCompletedCourses = localStorage.getItem('completedCourses');
    if (storedCompletedCourses) {
      this.completedCourses = JSON.parse(storedCompletedCourses);
    }
  }

  ngOnInit() {
    this.fetchAvailableCourses();
  }

  fetchAvailableCourses(): void {
    this.courseService.getAvailableCourses().subscribe(
      (courses) => {
        this.availableCourses = courses;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  enroll(course: any): void {
    this.courseService.enrollInCourse(course.id).subscribe(
      (enrollmentStatus) => {
        if (enrollmentStatus === 'success') {
          // Handle successful enrollment, e.g., show a success message
          course.enrolled = true; // Mark the course as enrolled
          this.enrolledCourses.push(course); // Update the enrolled courses array
          this.updateLocalStorage(); // Update local storage
        } else {
          // Handle enrollment failure, e.g., show an error message
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  complete(course: any): void {
    // Implement course completion logic here
    // You should mark the course as completed and update the local storage
  }

  // Helper method to update the local storage with enrolled and completed courses
  updateLocalStorage(): void {
    localStorage.setItem('enrolledCourses', JSON.stringify(this.enrolledCourses));
    localStorage.setItem('completedCourses', JSON.stringify(this.completedCourses));
  }
}
