import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from '../services/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginStatus: string = '';
  username: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(private router: Router, private constants: ConstantService) {}

  authenticate() {
    let url = this.constants.getIpAddres() + "/login/";
    let data = {
      "username": this.username,
      "password": this.password
    };

    console.log(data);
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((resolve) => {
        console.log("Login Request has been resolved!");
        return resolve.json();
      })
      .then((data) => {
        console.log("Login Data: " + JSON.stringify(data));
        if (data === "WRONG_LOGIN_CREDENTIALS") {
          this.showError = true;
        } else {
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("role", data["role"]);
          sessionStorage.setItem("email", data.email);
          sessionStorage.setItem("institution", data.institution);
          sessionStorage.setItem("authToken", data.authToken);

          // Check the role and navigate accordingly
          if (data["role"] === "student") {
            this.router.navigate(['student-dashboard']); // Replace with your student dashboard route
          } else if (data["role"] === "teacher") {
            this.router.navigate(['menu']); // Replace with your teacher dashboard route
          } else {
            // Handle unknown roles or provide a default route
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
