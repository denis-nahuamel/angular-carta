import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  disabled = true;
  constructor(private fb: FormBuilder,private router: Router, private loginService: LoginService) {}
  sendLogin(username: string, password: string) {
    return this.loginService.login(username, password);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {
    const enviar = this.form?.value;
    this.sendLogin(enviar.username, enviar.password).subscribe({
      next: (data) => {
        localStorage.setItem('token', JSON.stringify(data.token));
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.log('fallo en conexion', e.toString());
      },
    });
  }
}
