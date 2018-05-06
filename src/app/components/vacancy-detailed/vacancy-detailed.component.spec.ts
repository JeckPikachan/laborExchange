import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailedComponent } from './vacancy-detailed.component';

describe('VacancyDetailedComponent', () => {
  let component: VacancyDetailedComponent;
  let fixture: ComponentFixture<VacancyDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
