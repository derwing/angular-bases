import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainAccordionComponent } from './explain-accordion.component';

describe('ExplainAccordionComponent', () => {
  let component: ExplainAccordionComponent;
  let fixture: ComponentFixture<ExplainAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
