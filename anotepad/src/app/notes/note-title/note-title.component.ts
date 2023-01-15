import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-title',
  templateUrl: './note-title.component.html',
  styleUrls: ['./note-title.component.css']
})
export class NoteTitleComponent {

  gitHub: string = 'https://github.com/VictorKashima';

  technologies: string[];
  interpolationValidation: boolean = true;
  propertyValidation: boolean = true;

  constructor(private notesService: NotesService) {
    var noteService = new NotesService();

    this.technologies = noteService.getNotes();
  }

}
