import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListvdoComponent } from './item-listvdo.component';

describe('ItemListvdoComponent', () => {
  let component: ItemListvdoComponent;
  let fixture: ComponentFixture<ItemListvdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListvdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListvdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
