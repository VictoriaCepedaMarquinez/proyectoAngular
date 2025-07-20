import { TestBed } from '@angular/core/testing';

import { ClothesCart } from './clothes-cart';

describe('ClothesCart', () => {
  let service: ClothesCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
