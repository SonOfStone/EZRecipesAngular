import { TestBed } from '@angular/core/testing';

import { PantryWebService } from './pantry-web.service';

describe('PantryWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantryWebService = TestBed.get(PantryWebService);
    expect(service).toBeTruthy();
  });
});
