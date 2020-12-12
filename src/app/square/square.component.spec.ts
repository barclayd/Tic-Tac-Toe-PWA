import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square } from './square.component';

describe('SquareComponent', () => {
  let component: Square;
  let fixture: ComponentFixture<Square>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Square ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Square);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
