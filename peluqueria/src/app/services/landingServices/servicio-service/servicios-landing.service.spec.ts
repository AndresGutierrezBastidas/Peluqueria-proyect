import { TestBed } from '@angular/core/testing';

import { ServiciosLandingService } from './servicios-landing.service';

describe('ServiciosLandingService', () => {
  let service: ServiciosLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
