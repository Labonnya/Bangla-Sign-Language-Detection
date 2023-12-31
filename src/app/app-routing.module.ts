import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { InvalidCredentialsComponent } from './login/invalid-credentials/invalid-credentials.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { LiveModelComponent } from './live-model/live-model.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordDetailComponent } from './word-detail/word-detail.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"form", component:FormComponent},
  {path:"menu", component:MenuComponent},
  {path: 'videos', component: VideoListComponent},
  {path: 'course-details/:title', component: CourseDetailsComponent },
  {path: 'viewVideo', component: ViewTeacherComponent},
  {path:"home", component: HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"invalid-credentials", component:InvalidCredentialsComponent},
  {path:"profile", component:ProfileComponent},
  {path: "otp-verification", component: OtpVerificationComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "teacher-dashboard", component: TeacherDashboardComponent},
  {path: "quiz", component: QuestionsComponent},
  {path: "answers", component: AnswersComponent},
  {path: "model", component: LiveModelComponent},
  {path : "student-dashboard", component: StudentDashboardComponent},
  { path: 'courses', component: CourseListComponent },
  { path: 'enroll/:id', component: EnrollCourseComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'word-detail/:word', component: WordDetailComponent }, // Define the route for WordDetailComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
