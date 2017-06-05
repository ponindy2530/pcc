import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccChannelComponent } from './pcc-channel.component';

describe('PccChannelComponent', () => {
  let component: PccChannelComponent;
  let fixture: ComponentFixture<PccChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
