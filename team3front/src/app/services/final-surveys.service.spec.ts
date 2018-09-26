import { TestBed, inject } from '@angular/core/testing';

import { FinalSurveysService } from './final-surveys.service';

describe('FinalSurveysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalSurveysService]
    });
  });

  it('should be created', inject([FinalSurveysService], (service: FinalSurveysService) => {
    expect(service).toBeTruthy();
  }));
});
