import { Component, OnInit }  from '@angular/core';
import { FilmService }        from './film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css', '../dashboard/dashboard.component.css']
})
export class FilmComponent implements OnInit {
  new_language: String;
  new_url: String;
  new_producer: String;
  new_title: String;
  new_cast: String;
  new_concept: String;
  new_storyBoard: String;
  new_director: String;
  new_strunt: String;
  new_camera: String;
  new_videoEditor: String;
  new_production: String;
  new_feedBack: String;
  filterQuery: String;
  selectedFilm: any;
  page: number = 1;
  filmList: Array<any>;

  constructor(private service: FilmService) { }

  ngOnInit() {
    this.getAllFilms();
  }

  /*
   * display all the films
   */
  getAllFilms() {
    this.service.getAllFilms().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.filmList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * insert new film
   */
  insertNewFilm() {
    let instance = {
      'language': this.new_language,
      'url': this.new_url,
      'producer': this.new_producer,
      'title': this.new_title,
      'cast': this.new_cast,
      'concept': this.new_concept,
      'storyBoard': this.new_storyBoard,
      'director': this.new_director,
      'strunt': this.new_strunt,
      'camera': this.new_camera,
      'videoEditor': this.new_videoEditor,
      'production': this.new_production,
      'feedback' :this.new_feedBack
    }

    if(instance.title == null) {
      alert("Please give title before insert a film");
    } else {
      let before = 'watch?v=';
      instance.url = instance.url.replace(before, 'embed/');
      this.service.addNewFilm(instance).then(result => {
        if(result == 200) {
          alert("successfully submitted");
          this.getAllFilms();
        } else {
          alert("not successfully added");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * before update films
   */
  beforeUpdateFilm(filmId) {
    this.getParticularFilm(filmId).then((film) => {
      if(film) {
        this.selectedFilm = film;
      }
    })
  }

  /*
   * update film details
   */
  updateFilm() {
    let before = 'watch?v=';
    this.selectedFilm.url = this.selectedFilm.url.replace(before, 'embed/');
    this.service.updateFilmDetails(this.selectedFilm).then((result) => {
      if(result) {
        alert("Successfully updated film");
        this.getAllFilms();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected film
   */
  deleteFilm(filmId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deleteFilm(filmId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllFilms();
        }
      }).catch(err => {
        alert("not successfully updated due to " + err);
      })
    }
  }

  /*
   * select exact film
   */
  getParticularFilm(filmId) {
    return new Promise((resolve, reject) => {
      this.filmList.forEach((film)=> {
        if(film.id == filmId) {
          console.log(film);
          resolve(film);
        }
      })
      reject("no film");
    })
  }

}
