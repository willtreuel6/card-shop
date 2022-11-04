import { Component, OnInit } from '@angular/core';
import { IBox } from 'src/app/data/interfaces';
import { BackendService } from 'src/app/services/backend.service';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  boxes: IBox[] = [];

  constructor(private backendService: BackendService ) { }
  giveMeData(){
    
  }

  ngOnInit(): void {
    this.boxes = this.backendService.getBoxes();
  }

  openItemDetails(id: number){
    console.log("Open Item details")
  }
  

  

}
