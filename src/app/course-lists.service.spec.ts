import { TestBed } from '@angular/core/testing';

import { CourseListsService } from './course-lists.service';

describe('CourseListsService', () => {
  let service: CourseListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
