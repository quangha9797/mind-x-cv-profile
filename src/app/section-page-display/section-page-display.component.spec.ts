import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPageDisplayComponent } from './section-page-display.component';

describe('SectionPageDisplayComponent', () => {
  let component: SectionPageDisplayComponent;
  let fixture: ComponentFixture<SectionPageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
