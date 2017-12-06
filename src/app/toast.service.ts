import { Injectable }           from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ToastService {

  constructor(private toastMessagesService: NotificationsService) {

  }
  /*
   * successfull message
   */
  successMessage(title, message) {
    return this.toastMessagesService.success(
      title,
      message,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 100
      }
    );
  }

  /*
   * error message
   */
  errorMessage(title, message) {
    return this.toastMessagesService.error(
      title,
      message,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 100
      }
    );
  }

}
