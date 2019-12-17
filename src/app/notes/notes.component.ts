import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get(`https://todoloop.appspot.com/getNotes?uuid=d090073b-7d21-4536-9c1c-8090499c5aab`); 
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
