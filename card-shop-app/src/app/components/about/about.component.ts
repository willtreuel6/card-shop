import { Component, OnInit } from '@angular/core';
import { IAbout } from 'src/app/data/interfaces';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: IAbout[] = []
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.about = this.backendService.getAbout();
  }

}
