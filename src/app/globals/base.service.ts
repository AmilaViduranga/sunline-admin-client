import Axios          from 'axios';
import { Injectable } from '@angular/core';
import { Headers }    from '@angular/http';
import { APIInfo }       from './api.info';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {
  private axios: any;
  private headers: Headers;

  constructor(private apiAddress: APIInfo) {
    this.axios = Axios;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');
  }

  /*
   * handle base get url
   */
  get(path, params, callback) {
    let serviceUrl = this.apiAddress.liveApi + path;
    this.axios.get(serviceUrl, {
      params: params,
      headers:{
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    }).then(response => {
      callback(response, null);
    }).catch(err => {
      callback(null, err);
    })
  }

  /*
   * handle base post url
   */
  post(path, data, callback) {
    let serviceUrl = this.apiAddress.liveApi + path;
    if(path == "user/login") {
      this.axios.post(serviceUrl, data).then(response => {
        if(response.status == 200) {
          let data = {
            token: response.data.token,
            status: response.status
          }
          callback(data, null);
        }
      }).catch(err => {
        callback(null, err);
      })
    }
    this.axios.post(serviceUrl, data, {
      headers:{
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    }).then(response => {
      callback(response.status, null);
    }).catch(err => {
      callback(err.status, err);
    });
  }

  /*
   * handle put url
   */
  put(path, data, callback) {
    let serviceUrl = this.apiAddress.liveApi + path;
    this.axios.put(serviceUrl, data, {
      headers:{
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    }).then(response => {
      callback(response.data, null);
    }).catch(err => {
      callback(null, err);
    });
  }

  /*
   * handle delete url
   */
  delete(path, params, callback) {
    let serviceUrl = this.apiAddress.liveApi + path;
    this.axios.delete(serviceUrl, {
      params: params,
      headers:{
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
    }).then(response => {
      callback(response.data, null);
    }).catch(err => {
      callback(null, err);
    })
  }
}
