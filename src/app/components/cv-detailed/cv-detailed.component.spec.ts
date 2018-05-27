import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailedComponent } from './cv-detailed.component';

describe('CvDetailedComponent', () => {
  let component: CvDetailedComponent;
  let fixture: ComponentFixture<CvDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
