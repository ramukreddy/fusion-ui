import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptListingComponent } from './concept-listing.component';

describe('ConceptListingComponent', () => {
  let component: ConceptListingComponent;
  let fixture: ComponentFixture<ConceptListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
