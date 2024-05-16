import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { biblioGuard } from './biblio.guard';

describe('biblioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => biblioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
