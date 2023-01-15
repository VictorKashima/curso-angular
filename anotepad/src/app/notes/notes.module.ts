import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { NoteTitleComponent } from './note-title/note-title.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotesComponent,
    NoteTitleComponent
  ],
})
export class NotesModule { }
