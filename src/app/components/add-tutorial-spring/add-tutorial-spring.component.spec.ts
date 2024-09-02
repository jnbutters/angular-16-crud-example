import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutorialSpringComponent } from './add-tutorial-spring.component';

describe('AddTutorialSpringComponent', () => {
  let component: AddTutorialSpringComponent;
  let fixture: ComponentFixture<AddTutorialSpringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTutorialSpringComponent]
    });
    fixture = TestBed.createComponent(AddTutorialSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
