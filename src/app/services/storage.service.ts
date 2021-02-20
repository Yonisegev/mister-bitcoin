import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public loadFromStorage(key) {
    var val = localStorage.getItem(key);
    return JSON.parse(val);
  }
}
