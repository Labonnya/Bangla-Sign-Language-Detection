import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { VideoListComponent } from './video-list/video-list.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faPlusSquare, faEdit, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ShowWordsPipe } from './video-list/show-words.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { RegisterComponent } from './register/register.component';

import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InvalidCredentialsComponent } from './login/invalid-credentials/invalid-credentials.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveModelComponent } from './live-model/live-model.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CourseDataService } from './services/course-data-service.service';
import { CourseListComponent } from './course-list/course-list.component';
// import { CourseListComponent } from './course-list/course-list.component';
import { EnrollCourseComponent } from './enroll-course/enroll-course.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { TestingComponent } from './testing/testing.component';
import { RegisterCameraModelComponent } from './live-model/register-camera-model/register-camera-model.component';
import { LiveSignRecognitionComponent } from './live-model/live-sign-recognition/live-sign-recognition.component';
import { PracticeMimickingWithTutorialsComponent } from './live-model/practice-mimicking-with-tutorials/practice-mimicking-with-tutorials.component';
import { VideoSimilarityComponent } from './live-model/video-similarity/video-similarity.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    MenuComponent,
    VideoListComponent,
    EditFormComponent,
    ShowWordsPipe,
    CourseDetailsComponent,
    ViewTeacherComponent,
    RegisterComponent,
    OtpVerificationComponent,
    TeacherDashboardComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    InvalidCredentialsComponent,
    QuestionsComponent,
    AnswersComponent,
    NavbarComponent,
    LiveModelComponent,
    RoleManagementComponent,
    StudentDashboardComponent,
    CertificateComponent,
    // CourseListsComponent,
    CourseListComponent,
    EnrollCourseComponent,
    DictionaryComponent,
    WordDetailComponent,
    TestingComponent,
    RegisterCameraModelComponent,
    LiveSignRecognitionComponent,
    PracticeMimickingWithTutorialsComponent,
    VideoSimilarityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlusSquare);
    library.addIcons(faEdit);
    library.addIcons(faListCheck);
  }
 }
