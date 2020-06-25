import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name : string= "";
  email: string = "";
  tlf: string = "";

  constructor() { }

  ngOnInit(): void {
  }


}
