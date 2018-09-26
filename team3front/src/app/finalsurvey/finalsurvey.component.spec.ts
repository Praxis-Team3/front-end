import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsurveyComponent } from './finalsurvey.component';

describe('FinalsurveyComponent', () => {
  let component: FinalsurveyComponent;
  let fixture: ComponentFixture<FinalsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
