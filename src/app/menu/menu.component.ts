import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    if(sessionStorage.getItem("authToken")==null) this.router.navigate(["/login"]);
  }

  constructor(private router:Router){}

  onClickView(){
    this.router.navigate(['/viewVideo']);
  }

}
