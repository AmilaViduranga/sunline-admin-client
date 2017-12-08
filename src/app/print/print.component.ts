import { Component, OnInit }  from '@angular/core';
import { PrintService }       from './print.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css', '../dashboard/dashboard.component.css']
})
export class PrintComponent implements OnInit {
  new_concept: String;
  new_client: String;
  new_designer: String;
  new_url: String;
  printList: Array<any>;
  selectedPrint: any;

  constructor(private service: PrintService) { }

  ngOnInit() {
    this.getAllPrints();
  }

  /*
   * display all the prints
   */
  getAllPrints() {
    this.service.getAllPrints().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.printList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }


  /*
   * insert a print
   */
  insertPrint() {
    let instance = {
      'concept': this.new_concept,
      'client': this.new_client,
      'designer': this.new_designer,
      'url': this.new_url
    }

    this.service.addNewPrint(instance).then(result => {
      if(result == 200) {
        alert("new print inserted");
        this.getAllPrints();
      }
    })
  }

  /*
   * before update print
   */
  beforeUpdatePrint(printId) {
    this.getParticularPrint(printId).then((print) => {
      if(print) {
        this.selectedPrint = print;
      }
    })
  }

  /*
   * update print
   */
  updatePrint() {
    this.service.updatePrintDetails(this.selectedPrint).then((result) => {
      if(result) {
        alert("Successfully updated commercial");
        this.getAllPrints();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected print
   */
  deletePrint(printId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deletePrint(printId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllPrints();
        }
      }).catch(err => {
        alert("not successfully deleted due to " + err);
      })
    }
  }


  /*
   * select exact commercial
   */
  getParticularPrint(printId) {
    return new Promise((resolve, reject) => {
      this.printList.forEach((print)=> {
        if(print.id == printId) {
          resolve(print);
        }
      })
      reject("no prints");
    })
  }
}
