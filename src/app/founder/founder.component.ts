import { Component, OnInit }  from '@angular/core';
import { FounderService }     from './founder.service';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.css']
})
export class FounderComponent implements OnInit {
  page: number = 1;
  founderList: Array<any>;
  new_description: String;
  new_source_link: String;
  selectedFounder: any;
  filterQuery: String;

  constructor(private service: FounderService) { 
    this.founderList = null;
    this.filterQuery = null;
  }

  ngOnInit() {
    this.getAllFounderDetails();
  }

  /*
   * display all the founder details
   */
  getAllFounderDetails() {
    this.service.getAllFounderInfo().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.founderList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * insert new founder detail
   */
  insertNewFounder() {
    let instance = {
      'description': this.new_description,
      'url': this.new_source_link
    }

    if(instance.description == null) {
      alert("Please give title before insert a founder detail");
    } else {
      let before = 'watch?v=';
      instance.url = instance.url.replace(before, 'embed/');
      this.service.addNewFounderDetail(instance).then(result => {
        if(result == 200) {
          alert("successfully submitted");
          this.getAllFounderDetails();
        } else {
          alert("not successfully added");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * update founder detail
   */
  updateFounder() {
    let before = 'watch?v=';
    this.selectedFounder.url = this.selectedFounder.url.replace(before, 'embed/');
    this.service.updateCFounderDetails(this.selectedFounder).then((result) => {
      if(result) {
        alert("Successfully updated commercial");
        this.getAllFounderDetails();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected founder info
   */
  deleteFounder(founderId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deleteFounder(founderId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllFounderDetails();
        }
      }).catch(err => {
        alert("not successfully updated due to " + err);
      })
    }
  }

  /*
   * before update founder detail
   */
  beforeUpdateFounder(founderId) {
    this.getParticularFounderInfo(founderId).then((founderInfo) => {
      if(founderInfo) {
        this.selectedFounder = founderInfo;
      }
    })
  }

  /*
   * select exact founder detail
   */
  getParticularFounderInfo(founderId) {
    return new Promise((resolve, reject) => {
      this.founderList.forEach((founderInfo)=> {
        if(founderInfo.id == founderId) {
          resolve(founderInfo);
        }
      })
      reject("no commercial");
    })
  }
}
