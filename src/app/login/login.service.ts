import { Injectable }   from '@angular/core';
import { BaseService }  from '../globals/base.service';

@Injectable()
export class LoginService {
  private axios: any;
  private headers: Headers;

  constructor(private baseService: BaseService) {

  }

  /*
   * login in to the system
   */
  loginToSystem(loginInstance) {
    return new Promise((resolve, reject) => {
      if(loginInstance) {
        this.baseService.post('user/login', loginInstance, function(result) {
          resolve(result);
        })
      }
    })
  }

  /*
   * sign up to system
   */
  signUpToSystem(signUpInstance) {
    return new Promise((resolve, reject) => {
      if(signUpInstance) {
        this.baseService.post('user', signUpInstance, function(result,err) {
          if(result) {
            resolve(result);
          }
          if(err) {
            reject(err);
          }
        })
      }
    })
  }

}
