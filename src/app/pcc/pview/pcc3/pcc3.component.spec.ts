import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcc3Component } from './pcc3.component';

describe('Pcc3Component', () => {
  let component: Pcc3Component;
  let fixture: ComponentFixture<Pcc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pcc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pcc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
