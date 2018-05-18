import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpnInputComponent } from './xpn-input.component';

describe('XpnInputComponent', () => {
  let component: XpnInputComponent;
  let fixture: ComponentFixture<XpnInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpnInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
