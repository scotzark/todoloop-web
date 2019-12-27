import { Component } from '@angular/core';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoloop';

  addNoteRef: MatDialogRef<AddNoteComponent>;

  constructor(private dialog: MatDialog) {}

  addNote()
  {
    let addNoteRef = this.dialog.open(AddNoteComponent);
  }
}
