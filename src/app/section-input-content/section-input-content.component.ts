import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-input-content',
  templateUrl: './section-input-content.component.html',
  styleUrls: ['./section-input-content.component.css']
})
export class SectionInputContentComponent implements OnInit {

  constructor() { }

  @Input() currentCategory: String = ""

  @Output() categorySelected = new EventEmitter<any>();

  public objectInfo = {
    header: {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone: "",
      email: "",
      summary: ""
    }
  }

  ngOnInit(): void {
  }

}
