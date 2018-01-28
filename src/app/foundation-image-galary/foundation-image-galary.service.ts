import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class FoundationImageGalaryService {

  constructor(private base: BaseService) { }

  /*
   * insert new image details
   * */
  insert(imageInstance) {
    return new Promise((resolve, reject) => {
      this.base.post("amarakoon/images_galary", imageInstance, function(result, err) {
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
   * update image details
   * */
  update(imageInstance) {
    return new Promise((resolve, reject) => {
      this.base.put("amarakoon/images_galary", imageInstance, function(result, err) {
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
   * delete image details available
   * */
  delete(imageId) {
    return new Promise((resolve, reject) => {
      this.base.delete("amarakoon/images_galary/"+ imageId, null, function(result, err) {
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
   * get all the image details
   * */
  getAll() {
    return new Promise((resolve, reject) => {
      this.base.get("amarakoon/images_galary", null, function(result, err) {
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
