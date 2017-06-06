import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPccDetailComponent } from './item-pcc-detail.component';

describe('ItemPccDetailComponent', () => {
  let component: ItemPccDetailComponent;
  let fixture: ComponentFixture<ItemPccDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPccDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPccDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
