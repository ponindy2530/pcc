import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccHomelistComponent } from './pcc-homelist.component';

describe('PccHomelistComponent', () => {
  let component: PccHomelistComponent;
  let fixture: ComponentFixture<PccHomelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccHomelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccHomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
