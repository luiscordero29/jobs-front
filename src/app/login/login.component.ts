import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from './login';
import validator from 'validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login = new Login('', '');
  loginValidated: Boolean = false;
  loading: Boolean = false;
  fields: any;
  constructor(
    public LoginS: LoginService
  ) { }

  ngOnInit() {
    this.loginReset();
  }

  modalClose() {
    this.loginReset();
    this.LoginS.toggle();
  }

  onSubmit(formSignin: NgForm) {
    this.loginValidator();
    if (formSignin.valid && this.loginValidated) {
      this.loading = true;
      console.log(this.login);
    }
  }

  loginReset() {
    this.loading = false;
    this.login.email = '';
    this.login.password = '';
    this.fields = {
      email: {
        success: false,
        danger: false,
        help: '',
      },
      password: {
        success: false,
        danger: false,
        help: '',
      },
    };
  }

  loginValidator() {
    if ( validator.isEmpty(this.login.email) ) {
      // danger
      this.fields.email.success = false;
      this.fields.email.danger = true;
      this.fields.email.help = 'El E-mail es requerido.';
      this.loginValidated = false;
    } else {
      // success
      this.fields.email.success = true;
      this.fields.email.danger = false;
      this.fields.email.help = '';
      this.loginValidated = true;
      if ( !validator.isEmail(this.login.email) ) {
        // danger
        this.fields.email.success = false;
        this.fields.email.danger = true;
        this.fields.email.help = 'Ingrese formato nick@email.com .';
        this.loginValidated = false;
      } else {
        // success
        this.fields.email.success = true;
        this.fields.email.danger = false;
        this.fields.email.help = '';
        this.loginValidated = true;
      }
    }
    if ( validator.isEmpty(this.login.password) ) {
      // danger
      this.fields.password.success = false;
      this.fields.password.danger = true;
      this.fields.password.help = 'El Contraseña es requerido.';
      this.loginValidated = false;
    } else {
      // success
      this.fields.password.success = true;
      this.fields.password.danger = false;
      this.fields.password.help = '';
      this.loginValidated = true;
    }
  }

}
