import { TestBed } from '@angular/core/testing';

import { ClothesData } from './clothes-data';

describe('ClothesData', () => {
  let service: ClothesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
