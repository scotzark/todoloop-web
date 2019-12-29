import { Component, OnInit } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
import { MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  addNoteRef: MatDialogRef<AddNoteComponent>;

  constructor(private dialog: MatDialog) { }

  addNote()
  {
    let addNoteRef = this.dialog.open(AddNoteComponent);
  }

  ngOnInit() {
  }

}
