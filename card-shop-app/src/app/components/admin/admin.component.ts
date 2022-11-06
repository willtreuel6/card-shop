import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BoxService } from 'src/app/services/box.service';
import { IBox } from 'src/app/data/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  displayedColumns : string[] = ['Name','Year','Sport','Price','In Stock','edit','delete']
  dataSource: MatTableDataSource<IBox>;
  
  constructor(private boxService : BoxService, private authService : AuthService, private router : Router) { 
    this.dataSource = new MatTableDataSource(boxService.getBoxes())
   }
  ngOnInit() {
    console.log(this.dataSource)
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }











  
}