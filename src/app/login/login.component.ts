import { Component, OnInit }   from '@angular/core';
import { LoginService }        from './login.service';
import { ToastService }        from '../toast.service';
import { isUndefined }         from "util";
import { Router }              from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_user_name: String;
  login_password: String;
  sign_user_name: String;
  sign_password: String;
  sign_re_password: String;
  sign_email: String;

  constructor(private loginService: LoginService, private toast: ToastService, private router: Router) {
    this.login_user_name = null;
    this.login_password = null;
    this.sign_email = null;
    this.sign_password = null;
    this.sign_re_password = null;
    this.sign_user_name = null;
  }

  ngOnInit() {
  }

  /*
   * login to the admin panel
   */
  loginToSystem() {
    const loginInstance = {
      'userName': this.login_user_name,
      'password': this.login_password
    };

    if(loginInstance.userName != null && loginInstance.password) {
      this.loginService.loginToSystem(loginInstance).then((result) => {
        if(result['token'] == isUndefined || result['token'] == null) {
          alert("Invalid login, please try again");
        } else {
          localStorage.setItem('token', result['token']);
          this.router.navigateByUrl('/home');
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  /*
   * sign in to system
   */
  signInToSystem() {
    const signInstance = {
      'userName': this.sign_user_name,
      'password': this.sign_password,
      'email'   : this.sign_email,
      'userType': 'Employee'
    };

    if(this.sign_re_password !== this.sign_password) {
      alert("Paswword and retype password not match");
    } else {
      if(signInstance.userName == null || signInstance.password == null || signInstance.email == null) {
        alert("The user name or password or email should not be empty, please fill them");
      } else {
        this.loginService.signUpToSystem(signInstance).then((result) => {
          alert("successfully sign up to system");
        }).catch(err => {
          alert("Invalid sign up, please contact system admin");
        })
      }
    }
  }
}
