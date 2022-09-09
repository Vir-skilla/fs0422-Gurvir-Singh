import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletatiPage implements OnInit {
  listaTask: Todo[] = [];
  isLoading: boolean=true
  constructor(private taskService: TaskService) {}

  getTaskList() {
    setTimeout(() => {
      this.listaTask = this.taskService.getTaskList();
      this.isLoading = false
    }, 2000);

  }

  ngOnInit() {
    this.getTaskList();
  }
}