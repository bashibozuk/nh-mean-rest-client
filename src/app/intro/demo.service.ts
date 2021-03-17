import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  value$: Subject<number> = new Subject(); 
  constructor() { }

  getValue() {
    return this.value$;
  }

  setValue(value) {
    this.value$.next(value);
  }
}
