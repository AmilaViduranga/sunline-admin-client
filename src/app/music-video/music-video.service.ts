import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class MusicVideoService {

  constructor(private base: BaseService) { }

  /*
   * insert new music video
   */
  addNewMusicVideo(Instance) {
    return new Promise((resolve, reject) => {
      if(Instance) {
        this.base.post('music', Instance, function(result, err) {
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
   * get all music videos
   */
  getAllMusicVideos() {
    return new Promise((resolve, reject) => {
      this.base.get('music', null, function (result, err) {
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
   * update available music
   */
  updateMusicVideoDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('music', updatableInstance, function(result,err) {
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
   * delete music video
   */
  deleteMusicVideo(musicId) {
    return new Promise((resolve, reject) => {
      this.base.delete('music/' + musicId, null, function(result, err) {
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
