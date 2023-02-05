import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {TodosService} from "../services/todos.service";
import { v4 as uuid } from 'uuid';
import {AddTodoForm} from "../model/add-todo-form.model";

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form #form="ngForm" class="form" (ngSubmit)="submitHandler(form)">
        <div class="form-group">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ngModel>
        </div>

        <div class="form-group form-group--row">
            <input type="checkbox" name="completed" id="completed" ngModel />
            <label for="completed">Is Completed</label>
        </div>

        <button type="submit">Add Todo</button>
    </form>
  `,
  styles: [
    `
      .form {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        align-items: flex-start;

        &-group {
          display: flex;
          flex-flow: column nowrap;
          gap: 6px;

          &--row {
            flex-flow: row nowrap;
          }
        }
      }

    `
  ]
})
export class AddTodoComponent {

  constructor(
    private todosService: TodosService
  ) {
  }

  submitHandler(form: NgForm): void {
    if (form.invalid) return;

    const { title, completed } = form.value as AddTodoForm;

    this.todosService.todos.push({
      uuid: uuid(),
      title,
      completed
    });

    form.reset();
  }
}
