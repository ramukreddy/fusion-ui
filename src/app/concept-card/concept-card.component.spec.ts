import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptCardComponent } from './concept-card.component';

describe('ConceptCardComponent', () => {
  let component: ConceptCardComponent;
  let fixture: ComponentFixture<ConceptCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
