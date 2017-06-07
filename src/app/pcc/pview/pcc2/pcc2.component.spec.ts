import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcc2Component } from './pcc2.component';

describe('Pcc2Component', () => {
  let component: Pcc2Component;
  let fixture: ComponentFixture<Pcc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pcc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pcc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
