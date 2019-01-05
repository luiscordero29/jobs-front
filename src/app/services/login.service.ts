import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isOpen: Boolean = false;
  constructor() { }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
