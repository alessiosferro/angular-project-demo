import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";
import {AddTodoComponent} from "./app/pages/add-todo.component";
import {TodosListComponent} from "./app/pages/todos-list.component";
import {NotFoundComponent} from "./app/pages/not-found.component";
import {TodosService} from "./app/services/todos.service";

const routes: Routes = [
  {
    path: 'todos-list',
    component: TodosListComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'todos-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
