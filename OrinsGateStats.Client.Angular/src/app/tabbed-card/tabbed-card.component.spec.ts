import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedCardComponent } from './tabbed-card.component';

describe('TabbedCardComponent', () => {
  let component: TabbedCardComponent;
  let fixture: ComponentFixture<TabbedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
