import { TestBed } from '@angular/core/testing';

import { Compteur } from './compteur';

describe('Compteur', () => {
  let service: Compteur;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Compteur);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
