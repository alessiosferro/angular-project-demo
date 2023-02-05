import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosService} from "../services/todos.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <ul *ngIf="todosService.todos.length > 0; else noTodosFound">
        <li *ngFor="let todo of todosService.todos">
            <input [id]="todo.uuid" [name]="todo.uuid + '-completed'" type="checkbox" [ngModel]="todo.completed" />
            <label [for]="todo.uuid">{{ todo.title }}</label>
        </li>
    </ul>

    <ng-template #noTodosFound>
        <p>No todos were found.</p>
    </ng-template>
  `,
})
export class TodosListComponent {

  constructor(
    public todosService: TodosService
  ) {
  }
}
