import {Task} from "../models/Task"
import { NumberValueAccessor } from '@angular/forms';

export class Note {
  id: string;
  uuid: string;
  title: string;
  content: string;
  dbId: number;
  createTime: number;
  modifyTime: number;
  syncStatus: string;

  constructor()
  {
    this.id = "";
    this.uuid = "";
    this.title = "";
    this.content = "";
    this.dbId = 0;
    this.syncStatus = "NEEDS_SYNC";
  }
}