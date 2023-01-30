import { TestBed } from '@angular/core/testing';

import { DomainRegistrationService } from './domain-registration.service';

describe('DomainRegistrationService', () => {
  let service: DomainRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
