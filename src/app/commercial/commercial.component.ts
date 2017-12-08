import { Component, OnInit }    from '@angular/core';
import { CommercialService }    from './commercial.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css', '../dashboard/dashboard.component.css']
})
export class CommercialComponent implements OnInit {
  page: number = 1;
  commercialList: Array<any>;
  new_title: String;
  new_story: String;
  new_source_link: String;
  new_client:String;
  new_director: String;
  new_concept: String;
  new_feedback: String;
  new_editor: String;
  filterQuery: String;
  selectedCommercial: any;

  constructor(private service: CommercialService) {
    this.commercialList = null;
    this.filterQuery = null;
  }

  ngOnInit() {
    this.getAllCommercials();
  }

  /*
   * display all the commercials
   */
  getAllCommercials() {
    this.service.getAllCommercials().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.commercialList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * insert new commercial
   */
  insertNewCommercial() {
    let instance = {
      'title': this.new_title,
      'storyBoard': this.new_story,
      'url': this.new_source_link,
      'client' :this.new_client,
      'director': this.new_director,
      'editor': this.new_editor,
      'concept': this.new_concept,
      'feedback': this.new_feedback
    }

    if(instance.title == null) {
      alert("Please give title before insert a commercial");
    } else {
      let before = 'watch?v=';
      instance.url = instance.url.replace(before, 'embed/');
      this.service.addNewService(instance).then(result => {
        if(result == 200) {
          alert("successfully submitted");
          this.getAllCommercials();
        } else {
          alert("not successfully added");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * before update commercial
   */
  beforeUpdateCommercial(commercialId) {
    this.getParticularCommercial(commercialId).then((commercial) => {
      if(commercial) {
        this.selectedCommercial = commercial;
      }
    })
  }

  /*
   * update commercial
   */
  updateCommercial() {
    let before = 'watch?v=';
    this.selectedCommercial.url = this.selectedCommercial.url.replace(before, 'embed/');
    this.service.updateCommercialDetails(this.selectedCommercial).then((result) => {
      if(result) {
        alert("Successfully updated commercial");
        this.getAllCommercials();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected commercial
   */
  deleteCommercial(commercialId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deleteCommercial(commercialId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllCommercials();
        }
      }).catch(err => {
        alert("not successfully updated due to " + err);
      })
    }
  }

  /*
   * select exact commercial
   */
  getParticularCommercial(commercialId) {
    return new Promise((resolve, reject) => {
      this.commercialList.forEach((commercial)=> {
        if(commercial.id == commercialId) {
          resolve(commercial);
        }
      })
      reject("no commercial");
    })
  }
}
