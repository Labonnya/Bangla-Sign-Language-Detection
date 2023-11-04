import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Certificate } from '../models/certificate.model'; // Import the Certificate model

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  private courses: Course[] = [];
  private enrollments: Record<number, string[]> = {}; // Maps courseId to an array of enrolled student names
  private certificates: Certificate[] = [];

  constructor() {
    // Load data from local storage on service initialization
    this.loadFromLocalStorage();
  }

  // Add a new course
  addCourse(course: Course): void {
    this.courses.push(course);
    this.saveToLocalStorage();
  }

  // Get a list of available courses
  getCourses(): Course[] {
    return this.courses;
  }

  // Enroll a student in a course
  enrollStudent(courseId: number, studentName: string): void {
    if (!this.enrollments[courseId]) {
      this.enrollments[courseId] = [];
    }
    this.enrollments[courseId].push(studentName);
    this.saveToLocalStorage();
  }

  // Generate certificates for completed courses
  generateCertificates(): void {
    const currentDate = new Date();
    this.courses.forEach((course) => {
      if (this.enrollments[course.id]) {
        this.enrollments[course.id].forEach((studentName) => {
          const certificate: Certificate = {
            courseId: course.id,
            studentName,
            issueDate: currentDate,
          };
          this.certificates.push(certificate);
        });
      }
    });
    this.saveToLocalStorage();
  }

  // Get a list of certificates
  getCertificates(): Certificate[] {
    return this.certificates;
  }

  // Save data to local storage
  private saveToLocalStorage(): void {
    localStorage.setItem('courses', JSON.stringify(this.courses));
    localStorage.setItem('enrollments', JSON.stringify(this.enrollments));
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }

  // Load data from local storage
  private loadFromLocalStorage(): void {
    this.courses = JSON.parse(localStorage.getItem('courses') || '[]');
    this.enrollments = JSON.parse(localStorage.getItem('enrollments') || '{}');
    this.certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
  }
  getCourseById(courseId: number): Course | undefined {
    return this.courses.find((course) => course.id === courseId);
  }
}
