import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: any[] = [
    {
      id: 1,
      title: 'Course 1',
      description: 'Description of Course 1',
      enrolled: false,
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description of Course 2',
      enrolled: false,
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Description of Course 3',
      enrolled: false,
    },
  ];

  getAvailableCourses(): Observable<any[]> {
    // Simulate an API call to fetch available courses
    // You would typically replace this with an actual HTTP request to your backend
    return of(this.courses.filter((course) => !course.enrolled));
  }

  enrollInCourse(courseId: number): Observable<string> {
    // Simulate an API call to enroll in a course
    // You would typically replace this with an actual HTTP request to your backend
    const course = this.courses.find((c) => c.id === courseId);
    if (course && !course.enrolled) {
      course.enrolled = true;
      return of('success');
    }
    return of('failure');
  }
}
