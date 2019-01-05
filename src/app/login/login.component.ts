import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    public LoginS: LoginService
  ) { }

  ngOnInit() {
  }

  modalClose() {
    this.LoginS.toggle();
  }

}
