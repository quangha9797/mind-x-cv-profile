import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInputHeaderComponent } from './section-input-header.component';

describe('SectionInputHeaderComponent', () => {
  let component: SectionInputHeaderComponent;
  let fixture: ComponentFixture<SectionInputHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInputHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
