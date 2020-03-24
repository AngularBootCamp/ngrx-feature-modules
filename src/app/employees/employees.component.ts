import { Component } from '@angular/core';

@Component({
  selector: 'employees-dashboard',
  template: `
    <header style="margin-top: 5px;">
      <nav class="secondary-nav">
        <div class="nav-wrapper">
          <ul>
            <li routerLinkActive="green-background">
              <a routerLink="current">List Current Employees</a>
            </li>
            <li routerLinkActive="green-background">
              <a routerLink="new">Review New Employees</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class EmployeesDashboardComponent {}
