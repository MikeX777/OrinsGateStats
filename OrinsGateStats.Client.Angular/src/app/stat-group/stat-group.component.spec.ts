import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGroupComponent } from './stat-group.component';

describe('StatGroupComponent', () => {
  let component: StatGroupComponent;
  let fixture: ComponentFixture<StatGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
