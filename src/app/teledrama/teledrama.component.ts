import { Component, OnInit }  from '@angular/core';
import { TeledramaService }   from './teledrama.service';

@Component({
  selector: 'app-teledrama',
  templateUrl: './teledrama.component.html',
  styleUrls: ['./teledrama.component.css', '../dashboard/dashboard.component.css']
})
export class TeledramaComponent implements OnInit {
  new_language: String;
  new_url: String;
  new_producer: String;
  new_title: String;
  new_director: String;
  new_camera: String;
  new_Editor: String;
  teledramaList: Array<any>;
  selectedTeledrama: any;

  constructor(private service: TeledramaService) { }

  ngOnInit() {
    this.getAllTeledramas();
  }

  /*
   * display all the teledramas
   */
  getAllTeledramas() {
    this.service.getAllTeledramas().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.teledramaList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * insert new teledrama
   */
  insertNewTeledrama() {
    let instance = {
      'language': this.new_language,
      'url': this.new_url,
      'producer': this.new_producer,
      'title': this.new_title,
      'camera': this.new_camera,
      'director': this.new_director,
      'editor': this.new_Editor
    }

    if(instance.title == null) {
      alert("Please give title before insert a film");
    } else {
      let before = 'watch?v=';
      instance.url = instance.url.replace(before, 'embed/');
      this.service.addNewTeledrama(instance).then(result => {
        if(result == 200) {
          alert("successfully submitted");
          this.getAllTeledramas();
        } else {
          alert("not successfully added");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * before update teledrama
   */
  beforeUpdateTeledrama(teledramaId) {
    this.getParticularTeledrama(teledramaId).then((teledrama) => {
      if(teledrama) {
        this.selectedTeledrama = teledrama;
      }
    })
  }

  /*
   * update teledrama details
   */
  updateTeledrama() {
    let before = 'watch?v=';
    this.selectedTeledrama.url = this.selectedTeledrama.url.replace(before, 'embed/');
    this.service.updateTeledramaDetails(this.selectedTeledrama).then((result) => {
      if(result) {
        alert("Successfully updated teledrama");
        this.getAllTeledramas();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected teledrama
   */
  deleteFilm(teledramaId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deleteTeledrama(teledramaId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllTeledramas();
        }
      }).catch(err => {
        alert("not successfully updated due to " + err);
      })
    }
  }

  /*
   * select exact teledrama
   */
  getParticularTeledrama(teledramaId) {
    return new Promise((resolve, reject) => {
      this.teledramaList.forEach((teledrama)=> {
        if(teledrama.id == teledramaId) {
          resolve(teledrama);
        }
      })
      reject("no teledrama");
    })
  }
}
