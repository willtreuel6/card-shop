import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IBox } from 'src/app/data/interfaces';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  boxes: IBox[] = [];

  constructor(private backendService: BackendService ) { }
  giveMeData(){
    
  }

  ngOnInit(): void {
    this.boxes = this.backendService.getBoxes();
  }

}
