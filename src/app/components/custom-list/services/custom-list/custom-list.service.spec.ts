import { TestBed } from '@angular/core/testing';

import { CustomListService } from './custom-list.service';

describe('CustomListService', () => {
  let service: CustomListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
