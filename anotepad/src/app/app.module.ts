import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManualComponent } from './manual-component/manual-component.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';
import { ClassBindingComponent } from './notes/class-binding/class-binding.component';
import { NotesModule } from './notes/notes.module';

@NgModule({
    declarations: [
        AppComponent,
        ManualComponent,
        AutoComponentComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NotesModule,
    ]
})
export class AppModule { }
