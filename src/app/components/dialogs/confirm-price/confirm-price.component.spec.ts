import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPriceComponent } from './confirm-price.component';

describe('ConfirmPriceComponent', () => {
  let component: ConfirmPriceComponent;
  let fixture: ComponentFixture<ConfirmPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
