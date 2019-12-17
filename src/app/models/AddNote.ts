import {Note} from "../models/Note";
import {Task} from "../models/Task";

export class AddNote{
    note: Note
    tasks: Array<Task>;

    constructor()
    {
        this.note = null;
        this.tasks = null;
    }
}