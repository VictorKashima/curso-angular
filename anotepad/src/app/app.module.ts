import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual-component/manual-component.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';
import { NotesModule } from './notes/notes.module';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    AutoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
