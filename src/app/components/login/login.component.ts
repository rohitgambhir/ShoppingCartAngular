import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService , private router: Router) { }

  ngOnInit(): void {
  }
  login(form){
    console.log(form);
    this.as.login(form.value.email , form.value.password).then(data=>console.log(data)).catch(err=>console.log(err));
    this.router.navigate(['/']);
  }

}
