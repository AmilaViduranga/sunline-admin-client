import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeledramaComponent } from './teledrama.component';

describe('TeledramaComponent', () => {
  let component: TeledramaComponent;
  let fixture: ComponentFixture<TeledramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeledramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeledramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
