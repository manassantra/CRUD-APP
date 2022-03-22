// index.component.ts
import {  Router } from '@angular/router';
import { Subject } from "rxjs";
import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];
  private _document: any;

  constructor(private adunitservice: AdunitService , private router: Router) { }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }
 
  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }
}