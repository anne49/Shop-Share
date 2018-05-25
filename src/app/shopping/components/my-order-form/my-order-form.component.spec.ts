import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderFormComponent } from './my-order-form.component';

describe('MyOrderFormComponent', () => {
  let component: MyOrderFormComponent;
  let fixture: ComponentFixture<MyOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
