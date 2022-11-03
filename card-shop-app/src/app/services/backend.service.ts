import { Injectable } from '@angular/core';
import * as db from '../data/data.json';
import { IAbout, IBox, IContact } from '../data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  
  constructor() { }
  //Intermediary placeholder for import because angular is dumb
  intermediateJson = db

  getBoxes(): IBox[]{
    return this.intermediateJson.boxes
  }

  getAbout(): IAbout[]{
    return this.intermediateJson.about
  }

  getContact(): IContact[]{
    return this.intermediateJson.contact
  }
}
