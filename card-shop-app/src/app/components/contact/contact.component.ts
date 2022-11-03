import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/data/interfaces';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: IContact[] = []
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.contact = this.backendService.getContact();
  }

}
