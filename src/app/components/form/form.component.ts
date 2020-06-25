import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() newUser = {
    name :  "",
    email:  "",
    tlf:  ""
  }

  constructor() { }

  ngOnInit(): void {
  }


}
