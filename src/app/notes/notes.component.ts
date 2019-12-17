import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NotesResponse} from "../models/NotesResponse"

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes = [];
  tasks = [];
  constructor(private httpClient: HttpClient) { }

  public getNotes(){
    return this.httpClient.get(`https://todoloop.appspot.com/getNotes?uuid=b9496d65-da7b-4c7f-896b-8d7d1cf84a41`); 
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
