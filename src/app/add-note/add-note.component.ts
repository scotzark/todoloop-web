import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Note} from "../models/Note";
import { Observable } from 'rxjs';
import { NotesResponse } from '../models/NotesResponse';
import { AddNote } from '../models/AddNote';
import { Task } from '../models/Task';
import { v4 as uuid } from 'uuid';
import { MatDialog, MatDialogRef} from '@angular/material';
import {environment} from "../Environment";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private dialogRef: MatDialogRef<AddNoteComponent>) { }

  model = new Note();
  task = new Task();
  tasks = new Array<Task>(); 

  onSubmit() { 
    this.dialogRef.close();
    this.addNote().subscribe(
      response => {
        console.log(response);
      }
  ); 
  }

  addTask(){
    console.log("add task");
    var newTask = new Task();
    newTask.content = this.task.content;
    this.tasks.push(newTask);
  }

  createTask(taskInfo) : Task
  {
    var task = new Task();
    task.createTime = this.model.createTime;
    task.modifyTime = this.model.modifyTime;
    task.uuid = this.model.uuid;
    task.taskId = uuid();
    task.parentId = this.model.id;
    task.content = taskInfo.content;
    return task;
  }

  ngOnInit() {
  }

  addNote(): Observable<NotesResponse> {
    this.model.id = uuid();
    this.model.createTime  = Date.now();
    this.model.modifyTime = Date.now();
    this.model.uuid = this.cookieService.get("uuid");

    var note = new AddNote();
    note.note = this.model;

    var taskList = new Array<Task>();

    this.tasks.forEach( (element) => {
      console.log(element);
      var task = this.createTask(element);
      taskList.push(task);
    });

    note.tasks = taskList;

    return this.httpClient.post<NotesResponse>(environment.apiUrl+"addNote", note);
  }

}
