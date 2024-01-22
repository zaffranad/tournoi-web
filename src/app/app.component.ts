import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationRequest } from './UserRegistrationRequest';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    mail: new FormControl(''),
  });

  title = 'tournoi-web';

  onRegistrationSubmit() {
    this.loginService
      .callRegistrationService(
        new UserRegistrationRequest(this.registrationForm.value)
      )
      .subscribe();
  }

  onLoginSubmit() {
    throw new Error('Method not implemented.');
  }
}
