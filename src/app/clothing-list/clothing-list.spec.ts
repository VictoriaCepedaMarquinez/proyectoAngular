import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingList } from './clothing-list';

describe('ClothingList', () => {
  let component: ClothingList;
  let fixture: ComponentFixture<ClothingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
