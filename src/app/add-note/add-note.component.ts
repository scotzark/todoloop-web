import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Note} from "../models/Note";
import { Observable } from 'rxjs';
import { NotesResponse } from '../models/NotesResponse';
import { AddNote } from '../models/AddNote';
import { Task } from '../models/Task';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  model = new Note();
  task = new Task();

  url = "https://todoloop.appspot.com/addNote"
  

  onSubmit() { 
    this.addNote().subscribe(
      response => {
        console.log(response);
      }
  ); 
  }

  ngOnInit() {
  }

  addNote(): Observable<NotesResponse> {
    this.model.id = uuid();
    this.model.createTime  = Date.now();
    this.model.modifyTime = Date.now();
    this.model.uuid = "b9496d65-da7b-4c7f-896b-8d7d1cf84a41";

    this.task.createTime = this.model.createTime;
    this.task.modifyTime = this.model.modifyTime;
    this.task.uuid = this.model.uuid;
    this.task.taskId = uuid();
    this.task.parentId = this.model.id;

    console.log(this.task);

    var note = new AddNote();
    note.note = this.model;
    note.tasks = [this.task];

    return this.httpClient.post<NotesResponse>(this.url, note);
  }
}
