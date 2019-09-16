import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname;
  email;
  mobno;
  pswd;
  location;
  resume;
  userdetails;

  constructor(private rs:RegisterService,private rt:Router) { }

  ngOnInit() {
  }

  public register()
  {
    this.rs.adduser(this.uname,this.email,this.mobno,
      this.pswd,this.location,this.resume).subscribe(data=>{
      this.userdetails=data;
  })

  }
}
