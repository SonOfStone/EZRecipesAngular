import { TestBed } from '@angular/core/testing';

import { HttpservService } from './httpserv.service';

describe('HttpservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpservService = TestBed.get(HttpservService);
    expect(service).toBeTruthy();
  });
});
