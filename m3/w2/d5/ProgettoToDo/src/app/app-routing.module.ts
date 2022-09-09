import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './pages/completed/completed.component';
import { TodosPage } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path: "",
    component: TodosPage
  },
  {
    path: "completati",
    component: CompletatiPage
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
