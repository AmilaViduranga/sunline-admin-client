import { Component, OnInit }  from '@angular/core';
import { MusicVideoService }  from './music-video.service';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.component.html',
  styleUrls: ['./music-video.component.css', '../dashboard/dashboard.component.css']
})
export class MusicVideoComponent implements OnInit {
  new_language: String;
  new_url: String;
  new_lyrics: String;
  new_artist: String;
  new_musicBy: String;
  new_title: String;
  new_camera: String;
  new_production: String;
  new_feedback: String;
  page: number = 1;
  musicList: Array<any>;
  filterQuery: String;
  selectedMusicVideo: any;

  constructor(public service: MusicVideoService) { }

  ngOnInit() {
    this.getAllMusicVideo();
  }

  /*
   * display all the music videos
   */
  getAllMusicVideo() {
    this.service.getAllMusicVideos().then((result) => {
      if(result["status"] == 200 && result["data"].length !==0) {
        this.musicList = result["data"];
      }
    }).catch(err => {
      console.log(err);
    })
  }

  /*
   * insert new music video
   */
  insertNewMusicVideo() {
    let instance = {
      'language': this.new_language,
      'url': this.new_url,
      'lyrics': this.new_lyrics,
      'artist': this.new_artist,
      'musicBy': this.new_musicBy,
      'title': this.new_title,
      'camera': this.new_camera,
      'production': this.new_production,
      'feedback': this.new_feedback
    }

    if(instance.title == null) {
      alert("Please give title before insert a music video");
    } else {
      let before = 'watch?v=';
      instance.url = instance.url.replace(before, 'embed/');
      this.service.addNewMusicVideo(instance).then(result => {
        if(result == 200) {
          alert("successfully submitted");
          this.getAllMusicVideo();
        } else {
          alert("not successfully added");
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  /*
   * before update music video
   */
  beforeUpdateMusicVideo(musicId) {
    this.getParticularMusicVideo(musicId).then((musicInstance) => {
      if(musicInstance) {
        this.selectedMusicVideo = musicInstance;
      }
    })
  }

  /*
   * update music video
   */
  updateMusicVideo() {
    let before = 'watch?v=';
    this.selectedMusicVideo.url = this.selectedMusicVideo.url.replace(before, 'embed/');
    this.service.updateMusicVideoDetails(this.selectedMusicVideo).then((result) => {
      if(result) {
        alert("Successfully updated commercial");
        this.getAllMusicVideo();
      }
    }).catch(err => {
      alert("not successfully updated due to " + err);
    })
  }

  /*
   * delete selected music video
   */
  deleteMusicVideo(musicId) {
    let isNeeded = confirm("Are you sure to delete this");
    if(isNeeded) {
      this.service.deleteMusicVideo(musicId).then(result => {
        if(result) {
          alert("successfully deleted");
          this.getAllMusicVideo();
        }
      }).catch(err => {
        alert("not successfully updated due to " + err);
      })
    }
  }

  /*
   * select exact commercial
   */
  getParticularMusicVideo(musicId) {
    return new Promise((resolve, reject) => {
      this.musicList.forEach((music)=> {
        if(music.id == musicId) {
          resolve(music);
        }
      })
      reject("no music available");
    })
  }
}
