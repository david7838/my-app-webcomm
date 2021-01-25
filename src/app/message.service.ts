import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
    this.message = [];
  }

  message: string[];

  add(message: string) {
    this.message.push(message);
  }

  clear() {
    this.message = [];
  }
}
