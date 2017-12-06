import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class CommercialService {

  constructor(private base: BaseService) {

  }

  /*
   * insert new commercials
   */
  addNewService(commercialInstance) {
    return new Promise((resolve, reject) => {
      if(commercialInstance) {
        this.base.post('commercial', commercialInstance, function(result, err) {
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
   * get all commercials
   */
  getAllCommercials() {
    return new Promise((resolve, reject) => {
      this.base.get('commercial', null, function (result, err) {
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
   * update available commercial
   */
  updateCommercialDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('commercial', updatableInstance, function(result,err) {
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
   * delete commercial
   */
  deleteCommercial(commercialId) {
    return new Promise((resolve, reject) => {
      this.base.delete('commercial/' + commercialId, null, function(result, err) {
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
