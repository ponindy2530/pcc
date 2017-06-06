import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPccImgformComponent } from './item-pcc-imgform.component';

describe('ItemPccImgformComponent', () => {
  let component: ItemPccImgformComponent;
  let fixture: ComponentFixture<ItemPccImgformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPccImgformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPccImgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
