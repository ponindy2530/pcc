import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowimgComponent } from './showimg.component';

describe('ShowimgComponent', () => {
  let component: ShowimgComponent;
  let fixture: ComponentFixture<ShowimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
