import { TestBed, inject } from '@angular/core/testing';

import { StudentCohortService } from './student-cohort.service';

describe('StudentCohortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentCohortService]
    });
  });

  it('should ...', inject([StudentCohortService], (service: StudentCohortService) => {
    expect(service).toBeTruthy();
  }));
});
