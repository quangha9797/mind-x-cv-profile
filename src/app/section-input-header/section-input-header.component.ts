import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { commonConfig } from '../../assets/config'

@Component({
  selector: 'app-section-input-header',
  templateUrl: './section-input-header.component.html',
  styleUrls: ['./section-input-header.component.css']
})
export class SectionInputHeaderComponent implements OnInit {

  constructor() { }

  public imageSrc: String = "";

  @Input() logoSelectedInput: Boolean = true;

  @Output() logoSelected = new EventEmitter<boolean>();

  @Output() categorySelected = new EventEmitter<string>();

  ngOnInit(): void {
    this.imageSrc = commonConfig['logoImage'];
  }

  logoSelect(value: boolean){
    this.logoSelected.emit(value);
  }

  categorySelect(value: string){
    this.categorySelected.emit(value);
  }


}
