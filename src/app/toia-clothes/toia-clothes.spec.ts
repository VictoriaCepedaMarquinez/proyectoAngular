import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiaClothes } from './toia-clothes';

describe('ToiaClothes', () => {
  let component: ToiaClothes;
  let fixture: ComponentFixture<ToiaClothes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToiaClothes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiaClothes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
