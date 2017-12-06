/**
 * Created by Amila on 12/6/2017.
 */
import { Pipe, PipeTransform }       from '@angular/core';
import {isUndefined}                 from "util";

@Pipe({ name: 'searchTitle' })
export class SearchTitle implements PipeTransform {
  transform(collection: any[], title: string): any {
    if(title == null) {
      return collection;
    }
    if(collection.length !== 0) {
      return collection.filter(function (row) {
        title = title.toLowerCase();
        if(row.title.indexOf(title) > -1) {
          return row;
        }
      })
    }
    return collection;
  }
}
