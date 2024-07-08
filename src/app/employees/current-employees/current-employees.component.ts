import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EmployeeDisplayComponent } from '../employee-display/employee-display.component';
import * as EmployeesSelectors from '../employees.selectors';

@Component({
  selector: 'app-current-employees',
  templateUrl: './current-employees.component.html',
  standalone: true,
  imports: [EmployeeDisplayComponent, AsyncPipe]
})
export default class CurrentEmployeesComponent {
  employeeList: Observable<string[]>;

  constructor(store: Store) {
    this.employeeList = store.select(
      EmployeesSelectors.selectCurrentEmployees
    );
  }
}
