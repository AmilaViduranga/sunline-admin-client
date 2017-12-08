import { Injectable }     from '@angular/core';
import { BaseService }    from '../globals/base.service';

@Injectable()
export class FilmService {

  constructor(private base: BaseService) { }

  /*
   * get all commercials
   */
  getAllFilms() {
    return new Promise((resolve, reject) => {
      this.base.get('film', null, function (result, err) {
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
   * insert new film
   */
  addNewFilm(filmInstance) {
    return new Promise((resolve, reject) => {
      if(filmInstance) {
        this.base.post('film', filmInstance, function(result, err) {
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
   * update available film
   */
  updateFilmDetails(updatableInstance) {
    return new Promise((resolve, reject) => {
      this.base.put('film', updatableInstance, function(result,err) {
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
   * delete film
   */
  deleteFilm(filmId) {
    return new Promise((resolve, reject) => {
      this.base.delete('film/' + filmId, null, function(result, err) {
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
