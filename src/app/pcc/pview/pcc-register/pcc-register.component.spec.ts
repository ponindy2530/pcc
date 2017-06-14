import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccRegisterComponent } from './pcc-register.component';

describe('PccRegisterComponent', () => {
  let component: PccRegisterComponent;
  let fixture: ComponentFixture<PccRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
