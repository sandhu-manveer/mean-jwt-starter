import { TestBed, inject } from '@angular/core/testing';

import { AuthenitcateService } from './authenitcate.service';

describe('AuthenitcateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenitcateService]
    });
  });

  it('should be created', inject([AuthenitcateService], (service: AuthenitcateService) => {
    expect(service).toBeTruthy();
  }));
});
