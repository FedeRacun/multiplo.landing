import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToInvestComponent } from './how-to-invest.component';

describe('HowToInvestComponent', () => {
  let component: HowToInvestComponent;
  let fixture: ComponentFixture<HowToInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
