import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccArjComponent } from './pcc-arj.component';

describe('PccArjComponent', () => {
  let component: PccArjComponent;
  let fixture: ComponentFixture<PccArjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccArjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccArjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
