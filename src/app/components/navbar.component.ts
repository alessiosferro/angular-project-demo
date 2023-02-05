import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="navbar">
        <a routerLink="/todos-list" routerLinkActive="is-active">Todos List</a>
        <a routerLink="/add-todo" routerLinkActive="is-active">Add Todo</a>
    </div>
  `,
  styles: [
    `
      .navbar {
        padding: 10px;
        display: flex;
        gap: 20px;
        background: lightgray;
        border-bottom: 1px solid gray;
      }
      
      .is-active {
        color: green;
        font-weight: bold;
      }
    `
  ]
})
export class NavbarComponent {

}
