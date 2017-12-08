import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class TeledramaService {

  constructor(private base: BaseService) { }

  /*
   * get all teledramas
   */
  getAllTeledramas() {
    return new Promise((resolve, reject) => {
      this.base.get('teledrama', null, function (result, err) {
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
   * insert new teledrama
   */
  addNewTeledrama(teledramaInstance) {
    return new Promise((resolve, reject) => {
      if(teledramaInstance) {
        this.base.post('teledrama', teledramaInstance, function(result, err) {
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
   * update available teledrama
   */
  updateTeledramaDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('teledrama', updatableInstance, function(result,err) {
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
   * delete teledrama
   */
  deleteTeledrama(teledramaId) {
    return new Promise((resolve, reject) => {
      this.base.delete('teledrama/' + teledramaId, null, function(result, err) {
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
