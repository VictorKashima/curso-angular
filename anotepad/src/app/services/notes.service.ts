import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes() {
    return ['Angular', 'Python', 'React'];
  }

}