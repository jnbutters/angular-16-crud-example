import { TestBed } from '@angular/core/testing';

import { TutorialSpringService } from './tutorial-spring.service';

describe('TutorialSpringService', () => {
  let service: TutorialSpringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialSpringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
