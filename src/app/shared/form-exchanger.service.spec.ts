import { TestBed, inject } from '@angular/core/testing';

import { FormExchangerService } from './form-exchanger.service';

describe('FormExchangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormExchangerService]
    });
  });

  it('should be created', inject([FormExchangerService], (service: FormExchangerService) => {
    expect(service).toBeTruthy();
  }));
});
