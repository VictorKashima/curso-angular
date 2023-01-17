import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { NoteTitleComponent } from './note-title/note-title.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';


@NgModule({
  declarations: [
    NotesComponent,
    NoteTitleComponent,
    ClassBindingComponent
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
