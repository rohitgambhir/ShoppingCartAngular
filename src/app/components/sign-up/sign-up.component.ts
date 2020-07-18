import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // inject auth service in signup , import it from auth.service 
  errorMsg : string ='';
  constructor(private as:AuthService , private user: UserService , private router: Router) { }

  ngOnInit(): void {
  }
   
  signup(form){
   
    this.as.signup(form.value.email , form.value.password).then(data=>{
           this.user.addNewUser(data.user.uid , form.value.name , form.value.address);
           this.errorMsg='';
           this.router.navigate(['/']);
    }).catch(err=>this.errorMsg=err)
  }
}
