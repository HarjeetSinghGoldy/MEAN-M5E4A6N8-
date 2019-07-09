import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpClientModule} from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [
        HttpClientModule,
        RouterTestingModule
    ],
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
