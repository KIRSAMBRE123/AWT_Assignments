import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  userData: any = {
    username: '',
    password: ''
  };

  constructor(private user:UserService,private router:Router,private cookie:CookieService){

  }

  login(){
    this.user.login(this.userData).subscribe((data:any)=>{

      this.cookie.set("username",data.user.username);
      this.cookie.set("role",data.user.role);
      this.cookie.set("isLogin","true")
      this.router.navigate([""])
    })
  }

}
