import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicadsComponent } from './dynamicads.component';

describe('DynamicadsComponent', () => {
  let component: DynamicadsComponent;
  let fixture: ComponentFixture<DynamicadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
