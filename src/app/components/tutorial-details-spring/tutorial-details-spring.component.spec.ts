import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailsSpringComponent } from './tutorial-details-spring.component';

describe('TutorialDetailsSpringComponent', () => {
  let component: TutorialDetailsSpringComponent;
  let fixture: ComponentFixture<TutorialDetailsSpringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialDetailsSpringComponent]
    });
    fixture = TestBed.createComponent(TutorialDetailsSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
