import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticadsComponent } from './staticads.component';

describe('StaticadsComponent', () => {
  let component: StaticadsComponent;
  let fixture: ComponentFixture<StaticadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
