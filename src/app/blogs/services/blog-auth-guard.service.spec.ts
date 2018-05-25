import { TestBed, inject } from '@angular/core/testing';

import { BlogAuthGuardService } from './blog-auth-guard.service';

describe('BlogAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogAuthGuardService]
    });
  });

  it('should be created', inject([BlogAuthGuardService], (service: BlogAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
