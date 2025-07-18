import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiaAbout } from './toia-about';

describe('ToiaAbout', () => {
  let component: ToiaAbout;
  let fixture: ComponentFixture<ToiaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToiaAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToiaAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
