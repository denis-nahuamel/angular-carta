import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) { }
  sendLogin(username: string, password: string){
    return this.loginService.login(username, password);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl(""),
      password: new FormControl("")
    })
  }
  submit(){
    const enviar = this.form?.value;
    console.log("enviar", enviar);
    this.sendLogin(enviar.username, enviar.password).subscribe(response => console.log(response))
  }

}
