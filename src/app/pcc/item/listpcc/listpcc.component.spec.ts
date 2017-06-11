import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpccComponent } from './listpcc.component';

describe('ListpccComponent', () => {
  let component: ListpccComponent;
  let fixture: ComponentFixture<ListpccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
