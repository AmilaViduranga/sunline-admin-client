import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class FounderService {
  
  constructor(private base: BaseService) { 

  }

  /*
   * insert new founder info
   */
  addNewFounderDetail(founderInstance) {
    return new Promise((resolve, reject) => {
      if(founderInstance) {
        this.base.post('amarakoon/founder', founderInstance, function(result, err) {
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
   * get all founder details
   */
  getAllFounderInfo() {
    return new Promise((resolve, reject) => {
      this.base.get('amarakoon/founder', null, function (result, err) {
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
   * update available founder details
   */
  updateCFounderDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('amarakoon/founder', updatableInstance, function(result,err) {
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
   * delete founder detail
   */
  deleteFounder(founderId) {
    return new Promise((resolve, reject) => {
      this.base.delete('amarakoon/founder/' + founderId, null, function(result, err) {
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
