import { TestBed, inject } from '@angular/core/testing';

import { ConceptService } from './concept.service';

describe('ConceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConceptService]
    });
  });

  it('should ...', inject([ConceptService], (service: ConceptService) => {
    expect(service).toBeTruthy();
  }));
});
