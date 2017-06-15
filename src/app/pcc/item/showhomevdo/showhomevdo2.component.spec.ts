import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showhomevdo2Component } from './showhomevdo2.component';

describe('Showhomevdo2Component', () => {
  let component: Showhomevdo2Component;
  let fixture: ComponentFixture<Showhomevdo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showhomevdo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showhomevdo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
