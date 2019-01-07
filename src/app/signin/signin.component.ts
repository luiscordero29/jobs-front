import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninService } from '../services/signin.service';
import { User } from './user';
import validator from 'validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  user = new User('', '', '', '', false, '');
  userValidated: Boolean = false;
  loading: Boolean = false;
  fields: any;
  constructor(
    public SigninS: SigninService
  ) {}

  ngOnInit() {
    this.signinReset();
  }

  modalClose() {
    this.signinReset();
    this.SigninS.toggle();
  }

  onSubmit(formSignin: NgForm) {
    this.signinValidator();
    if (formSignin.valid && this.userValidated) {
      this.loading = true;
      console.log(this.user);
    }
  }

  signinReset() {
    this.loading = false;
    this.user.fullname = '';
    this.user.phone = '';
    this.user.email = '';
    this.user.password = '';
    this.user.type = '';
    this.user.terms = false;
    this.fields = {
      fullname: {
        success: false,
        danger: false,
        help: '',
      },
      phone: {
        success: false,
        danger: false,
        help: '',
      },
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
      type: {
        success: false,
        danger: false,
        help: '',
      },
      terms: {
        help: '',
      },
    };
  }

  signinValidator() {
    if ( validator.isEmpty(this.user.fullname) ) {
      // danger
      this.fields.fullname.success = false;
      this.fields.fullname.danger = true;
      this.fields.fullname.help = 'Los Apellidos y Nombres es requerido.';
      this.userValidated = false;
    } else {
      // success
      this.fields.fullname.success = true;
      this.fields.fullname.danger = false;
      this.fields.fullname.help = '';
      this.userValidated = true;
    }
    if ( validator.isEmpty(this.user.phone) ) {
      // danger
      this.fields.phone.success = false;
      this.fields.phone.danger = true;
      this.fields.phone.help = 'El Teléfono es requerido.';
      this.userValidated = false;
    } else {
      // success
      this.fields.phone.success = true;
      this.fields.phone.danger = false;
      this.fields.phone.help = '';
      this.userValidated = true;
    }
    if ( validator.isEmpty(this.user.email) ) {
      // danger
      this.fields.email.success = false;
      this.fields.email.danger = true;
      this.fields.email.help = 'El E-mail es requerido.';
      this.userValidated = false;
    } else {
      // success
      this.fields.email.success = true;
      this.fields.email.danger = false;
      this.fields.email.help = '';
      this.userValidated = true;
      if ( !validator.isEmail(this.user.email) ) {
        // danger
        this.fields.email.success = false;
        this.fields.email.danger = true;
        this.fields.email.help = 'Ingrese formato nick@email.com .';
        this.userValidated = false;
      } else {
        // success
        this.fields.email.success = true;
        this.fields.email.danger = false;
        this.fields.email.help = '';
        this.userValidated = true;
      }
    }
    if ( validator.isEmpty(this.user.password) ) {
      // danger
      this.fields.password.success = false;
      this.fields.password.danger = true;
      this.fields.password.help = 'El Contraseña es requerido.';
      this.userValidated = false;
    } else {
      // success
      this.fields.password.success = true;
      this.fields.password.danger = false;
      this.fields.password.help = '';
      this.userValidated = true;
    }
    if ( validator.isEmpty(this.user.type) ) {
      // danger
      this.fields.type.success = false;
      this.fields.type.danger = true;
      this.fields.type.help = 'Seleccione el tipo de usuario.';
      this.userValidated = false;
    } else {
      // success
      this.fields.type.success = true;
      this.fields.type.danger = false;
      this.fields.type.help = '';
      this.userValidated = true;
    }
    if ( !this.user.terms ) {
      // danger
      this.fields.terms.help = 'Es necesario aceptar los terminos y condiciones.';
      this.userValidated = false;
    } else {
      // success
      this.fields.terms.help = '';
      this.userValidated = true;
    }
  }
}
