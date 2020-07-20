import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser:boolean;
   isOpen: boolean=false;
  constructor(private as: AuthService , private router : Router) { }
   
  ngOnInit(): void {
    // saari properties ko component ke saath load krta hai , agr function wise activate krna hai jaise ki logout ho toh change kro property , lekin kyunki hm user ka status , jo ki auth se observable ki trh aara hai , usko subscribe krna pdega , taaki continously monitor kr ske usko . 
    this.as.user.subscribe(user=>{
       if(user){
         this.isUser=true;
         this.as.userId=user.uid;
        //  this.router.navigate(['/']);
        // do this router in your login component
        //  console.log(this.isUser);
       }
       else{
         this.isUser= false;
        //  console.log(this.isUser);
        //  this.router.navigate(['/']);
       }
    })
  }
  toggleNavbar(){
       this.isOpen=!this.isOpen;
  }
  logOut(){
      this.as.logout();
      // console.log('logout successful');
  }

}
