import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiseOportunityComponent } from './choise-oportunity.component';

describe('ChoiseOportunityComponent', () => {
  let component: ChoiseOportunityComponent;
  let fixture: ComponentFixture<ChoiseOportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiseOportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiseOportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
