import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  constructor() {}
  //Objeto observable
  $modal = new EventEmitter<any>();
}
