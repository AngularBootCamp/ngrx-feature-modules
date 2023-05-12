import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-dashboard',
  template: `
    <nav class="secondary-nav">
      <ul>
        <li routerLinkActive="active-link">
          <a routerLink="current">List Current Employees</a>
        </li>
        <li routerLinkActive="active-link">
          <a routerLink="new">Review New Employees</a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class EmployeesDashboardComponent {}
