import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionInputComponent } from './section-input/section-input.component';
import { SectionPageDisplayComponent } from './section-page-display/section-page-display.component';
import { SectionInputHeaderComponent } from './section-input-header/section-input-header.component';
import { SectionInputContentComponent } from './section-input-content/section-input-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionInputComponent,
    SectionPageDisplayComponent,
    SectionInputHeaderComponent,
    SectionInputContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
