import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { flimsListService } from './flims-list.service';

describe('Films List Service', () => {
  let flimsListServiceValue: flimsListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [flimsListService, HttpClient, HttpHandler],
    });
    flimsListServiceValue = TestBed.inject(flimsListService);
  });

  it('should create the app', () => {
    expect(flimsListServiceValue).toBeTruthy();
  });
});
