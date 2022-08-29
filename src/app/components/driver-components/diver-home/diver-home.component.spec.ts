import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiverHomeComponent } from './diver-home.component';

describe('DiverHomeComponent', () => {
  let component: DiverHomeComponent;
  let fixture: ComponentFixture<DiverHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiverHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
