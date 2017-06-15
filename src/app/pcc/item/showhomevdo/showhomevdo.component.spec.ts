import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhomevdoComponent } from './showhomevdo.component';

describe('ShowhomevdoComponent', () => {
  let component: ShowhomevdoComponent;
  let fixture: ComponentFixture<ShowhomevdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhomevdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhomevdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
