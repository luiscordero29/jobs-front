import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    public SigninS: SigninService,
    public LoginS: LoginService,
  ) { }

  ngOnInit() {
  }

  modalSignin() {
    this.SigninS.toggle();
  }

  modalLogin() {
    this.LoginS.toggle();
  }

}
