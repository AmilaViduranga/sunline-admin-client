/**
 * Created by Amila on 12/4/2017.
 */

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class APIInfo {
  liveApi: String;

  constructor() {
    this.liveApi = 'http://localhost:8002/';
  }
}

