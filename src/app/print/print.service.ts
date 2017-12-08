import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class PrintService {

  constructor(private base: BaseService) { }

  /*
   * get all prints
   */
  getAllPrints() {
    return new Promise((resolve, reject) => {
      this.base.get('print', null, function (result, err) {
        if(result) {
          resolve(result);
        }
        if(err) {
          reject(err);
        }
      })
    })
  }

  /*
   * insert print
   */
  addNewPrint(printInstance) {
    return new Promise((resolve, reject) => {
      if(printInstance) {
        this.base.post('print', printInstance, function(result, err) {
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

  /*
   * update available print
   */
  updatePrintDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('print', updatableInstance, function(result,err) {
        if(result) {
          resolve(result);
        }
        if(err) {
          reject(err);
        }
      })
    })
  }

  /*
   * delete print
   */
  deletePrint(printId) {
    return new Promise((resolve, reject) => {
      this.base.delete('print/' + printId, null, function(result, err) {
        if(result) {
          resolve(result);
        }
        if(err) {
          reject(err);
        }
      })
    })
  }
}
