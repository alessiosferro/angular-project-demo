import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./components/navbar.component";

@Component({
  selector: 'app-root',
  template: `
    <app-navbar />
    
    <main class="content">
        <router-outlet></router-outlet>
    </main>
  `,
  imports: [NavbarComponent, RouterModule],
  standalone: true,
  styles: [`
    .content {
      margin: 30px;
    }
  `]
})
export class AppComponent {
}
