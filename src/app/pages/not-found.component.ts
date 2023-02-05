import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>404 Page Not Found</h1>
    <a routerLink="/todos-list">Return to Todos List</a>
  `,
})
export class NotFoundComponent {
}
