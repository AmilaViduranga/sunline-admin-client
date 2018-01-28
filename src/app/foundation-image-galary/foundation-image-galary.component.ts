import { Component, OnInit }              from '@angular/core';
import { FoundationImageGalaryService }   from './foundation-image-galary.service';

@Component({
  selector: 'app-foundation-image-galary',
  templateUrl: './foundation-image-galary.component.html',
  styleUrls: ['./foundation-image-galary.component.css']
})
export class FoundationImageGalaryComponent implements OnInit {

  imageList: Array<any>;
  new_description: String;
  new_image: any;
  selectedImage: any;

  constructor(private service: FoundationImageGalaryService) { 
  
  }

  ngOnInit() {
    this.getAllImages();
  }

  beforeUpdateImage(image) {
    this.selectedImage = image;
  }

  /*
   * get all the images 
   * */
  getAllImages() {
    return new Promise((resolve, reject) => {
      this.service.getAll().then(result => {
        result["data"].forEach(image => {
          image["url"] = "data:image/png;base64,"+image["url"];
        })
        resolve(this.imageList = result["data"]);
      }).catch(err => {
        reject(console.log(err));
      })
    })
  }

  /*
   * insert new image
   * */
  insertImage() {
    let image = {
      "url": this.new_image,
      "description": this.new_description
    }
    this.service.insert(image).then(result => {
      this.getAllImages();
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * convert image to base 64
   * */
  fileEvent(fileInput: Event, action: String){
    let file = fileInput.target['files'][0];
    this.getBase64(file).then(result => {
      if(action == "insert") {
        this.new_image = result;
      }
      if(action == "update") {
        this.selectedImage.url = result;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  /*
   * delete available image
   * */
  deleteImage(imageId) {
    if(confirm("Are you sure to delete this?")) {
      this.service.delete(imageId).then(result => {
        this.getAllImages();
      }).catch(err => {
        console.log(err);
      }) 
    }
  }

  /*
   * update available image details
   * */
  updateImage() {
    this.service.update(this.selectedImage).then(result => {
      this.getAllImages();
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * base 64 functionality
   * */
  getBase64(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    })
  }
}
