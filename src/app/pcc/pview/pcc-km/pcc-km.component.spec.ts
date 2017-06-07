import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccKmComponent } from './pcc-km.component';

describe('PccKmComponent', () => {
  let component: PccKmComponent;
  let fixture: ComponentFixture<PccKmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccKmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccKmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
