import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pcc1Component } from './pcc1.component';

describe('Pcc1Component', () => {
  let component: Pcc1Component;
  let fixture: ComponentFixture<Pcc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pcc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pcc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
