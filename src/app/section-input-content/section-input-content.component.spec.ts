import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInputContentComponent } from './section-input-content.component';

describe('SectionInputContentComponent', () => {
  let component: SectionInputContentComponent;
  let fixture: ComponentFixture<SectionInputContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInputContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInputContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
