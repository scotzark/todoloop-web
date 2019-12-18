export class Task {
    taskId: string;
    parentId: string;
    content: string;
    title: string;
    createTime: number;
    modifyTime: number;
    syncStatus: string;
    uuid: string;
   
    constructor()
    {
      this.title = "";
      this.syncStatus = "NEEDS_SYNC";

    }
  }