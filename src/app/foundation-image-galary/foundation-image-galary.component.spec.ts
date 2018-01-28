import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationImageGalaryComponent } from './foundation-image-galary.component';

describe('FoundationImageGalaryComponent', () => {
  let component: FoundationImageGalaryComponent;
  let fixture: ComponentFixture<FoundationImageGalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundationImageGalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationImageGalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
