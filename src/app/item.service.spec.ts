import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ItemService = TestBed.get(ItemService);
    expect(service).toBeTruthy();
  });

  it('should return a valid item',
    inject(
      [HttpTestingController, ItemService],
      (httpMock: HttpTestingController, service: ItemService) => {
        const inputString = '1';
        service.getItem(inputString).subscribe(data => {
          expect(data.id).toBe('1');
        });
        const request = httpMock.expectOne('/assets/item/1.json');
        expect(request.request.method).toEqual('GET');
        request.flush({
          id: '1',
          name: 'item one',
          description: 'This actually works'
        });
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
