import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NotesResponse} from "../models/NotesResponse"
import {Note} from "../models/Note";
import {Task} from "../models/Task";
import { AddNote } from '../models/AddNote';
import {environment} from "../Environment";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [];
  tasks = [];

  url = "https://todoloop.appspot.com/"

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  public getNotes(){
    let param: any = {'uuid': this.cookieService.get("uuid")};
    let requestUrl = environment.apiUrl+"getNotes";
    return this.httpClient.get(requestUrl, {params: param}); 
  }

  deleteNote(note: Note) {
    let deleteNote = new AddNote();
    deleteNote.note = note;
    deleteNote.tasks = this.tasks;
    this.httpClient.post<NotesResponse>(environment.apiUrl+"deleteNote", deleteNote).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      });
  }

  deleteTask(task: Task) {
    this.httpClient.post<NotesResponse>(environment.apiUrl+"deleteTask", task).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      });
  }

  ngOnInit() {
     this.getNotes().subscribe((data)=>{
      console.log(data);
        this.notes = (data as NotesResponse).notes;
        this.tasks = (data as NotesResponse).tasks;
        console.log(this.notes);
      });
  }

}
