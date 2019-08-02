import { TestBed } from '@angular/core/testing';

import { NotAuthenticatedService } from './not-authenticated.service';

describe('NotAuthenticatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotAuthenticatedService = TestBed.get(NotAuthenticatedService);
    expect(service).toBeTruthy();
  });
});
