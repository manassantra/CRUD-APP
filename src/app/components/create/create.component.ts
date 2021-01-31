// create.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name, unit_price);
    this.router.navigate(['index']);
}

  ngOnInit() {
  }

}