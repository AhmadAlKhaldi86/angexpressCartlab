import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartModifyComponent } from './cart-modify.component';

describe('CartModifyComponent', () => {
  let component: CartModifyComponent;
  let fixture: ComponentFixture<CartModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
