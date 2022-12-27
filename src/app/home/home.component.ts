import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userForm: FormGroup;
  listData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      company: ['', Validators.required],
      title: ['', Validators.required],
      group: ['', Validators.required],
    });
  }
  addItem() {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
}
