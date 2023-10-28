import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogout = true;

  constructor(private router: Router){}

  ngOnInit(): void {
    if(sessionStorage.getItem("authToken")==null) this.isLogout = false;  
  }

  onClickCourse(): void{
    this.router.navigate(['/videos']);
  }

  onClickQuiz(): void{
    this.router.navigate(['/quiz']);
  }

  onClickMenu(): void{
    this.router.navigate(['/menu']);
  }
}
