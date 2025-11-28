import { TestBed } from '@angular/core/testing';

import { Fonctionnalites } from './fonctionnalites';

describe('Fonctionnalites', () => {
  let service: Fonctionnalites;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fonctionnalites);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
