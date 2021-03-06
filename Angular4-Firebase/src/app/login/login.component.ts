import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  errMess: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("User: ", this.user);
    this.authService.logIn(this.user);
    this.dialogRef.close();          
  }

  googleLogin() {
    this.authService.googleLogin();
    this.dialogRef.close();              
  }
}