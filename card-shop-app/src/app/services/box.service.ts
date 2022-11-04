import { Injectable } from '@angular/core';
import { IBox } from 'src/app/data/interfaces';
import * as db from '../data/data.json'

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor() { }
  //Intermediary placeholder for import because angular is dumb
  intermediateJson = db

  getBoxes(): IBox[]{
    return this.intermediateJson.boxes
  }
}
