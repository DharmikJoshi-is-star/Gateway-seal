import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionValueComponent } from './condition-value.component';

describe('ConditionValueComponent', () => {
  let component: ConditionValueComponent;
  let fixture: ComponentFixture<ConditionValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
