import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddNoteComponent } from './add-note/add-note.component';
import {CookieService} from 'ngx-cookie-service';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule, 
  MatSelectModule,
  MatFormFieldModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';
import { AccountControllerComponent } from './account-controller/account-controller.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    AccountControllerComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [AddNoteComponent]
})
export class AppModule { }
