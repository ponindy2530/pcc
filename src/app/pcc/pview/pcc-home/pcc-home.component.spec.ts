import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccHomeComponent } from './pcc-home.component';

describe('PccHomeComponent', () => {
  let component: PccHomeComponent;
  let fixture: ComponentFixture<PccHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
