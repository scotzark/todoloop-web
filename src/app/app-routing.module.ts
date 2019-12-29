import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AccountControllerComponent } from './account-controller/account-controller.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes: Routes = [
  {path:'login', component: AccountControllerComponent},
  {path:'notes', component: DashBoardComponent},
  { path: '**', component: AccountControllerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
