import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeDidComponent } from './how-we-did.component';

describe('HowWeDidComponent', () => {
  let component: HowWeDidComponent;
  let fixture: ComponentFixture<HowWeDidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowWeDidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
