import {Note} from "../models/Note";
import {Task} from "../models/Task";

export class NotesResponse{
    notes: Array<Note>;
    tasks: Array<Task>;

    constructor()
    {
        this.notes = null;
        this.tasks = null;
    }
}