import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccNbcComponent } from './pcc-nbc.component';

describe('PccNbcComponent', () => {
  let component: PccNbcComponent;
  let fixture: ComponentFixture<PccNbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccNbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccNbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
