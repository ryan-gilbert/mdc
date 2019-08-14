import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dataloggers = [
      { id: '1', name: 'foo' },
      { id: '2', name: 'bar' }
    ];
    return { dataloggers };
  }
  
}
