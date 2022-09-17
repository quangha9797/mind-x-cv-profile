import { Component, OnInit } from '@angular/core';
import { commonEnums } from '../common/common.enums';
import { commonConfig } from 'src/assets/config';

@Component({
  selector: 'app-section-input',
  templateUrl: './section-input.component.html',
  styleUrls: ['./section-input.component.css']
})
export class SectionInputComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {

  }

  public logoSelected: Boolean = true;
  public siTitle: String = "Templates";
  public theBasicTemplateImg: String = commonConfig.theBasicTemplateUrl;
  public theBasicButtonName: String = "THE BASIC";
  public currentCategory: String = "";

  setLogoSelected(value: boolean) {
    this.siTitle = "Templates";
    this.logoSelected = value;
    this.theBasicTemplateImg = commonConfig.theBasicTemplateUrl;
    this.theBasicButtonName = "THE BASIC";
  }

  chooseTemplateFunc(template: String) {
    switch (template) {
      case commonEnums.TEMPLATES.THE_BASIC:
        this.logoSelected = false;

        break;
      default:
        break;
    }
  }

  setCategorySelected(category: String) {
    this.currentCategory = category;
  }
}
