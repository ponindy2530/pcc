import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPccCformComponent } from './item-pcc-cform.component';

describe('ItemPccCformComponent', () => {
  let component: ItemPccCformComponent;
  let fixture: ComponentFixture<ItemPccCformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPccCformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPccCformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
