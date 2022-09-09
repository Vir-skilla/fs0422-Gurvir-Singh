import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosPage implements OnInit {
  nomeTask!: string;
  listaTask: Todo[] = [];
  testo!: string;
  isLoading: boolean=true

  constructor(private taskService: TaskService) {}

  getTaskList() {
    setTimeout(() => {
      this.listaTask = this.taskService.getTaskList();
      this.isLoading = false
    }, 2000);

  }

  addTask(nomeTask: string) {
    this.nomeTask.trim();
    this.nomeTask = ' ';
    setTimeout(() => {
      this.taskService.addTask(nomeTask);
    }, 2000);
  }

  completedTask(id: number) {
    setTimeout(() => {
      this.taskService.completedTask(id);
    }, 2000);
  }

  ngOnInit() {
    this.getTaskList();
  }
}