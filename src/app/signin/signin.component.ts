import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {
  constructor(
    public SigninS: SigninService
  ) {}

  ngOnInit() {
  }

  modalClose() {
    this.SigninS.toggle();
  }

}
