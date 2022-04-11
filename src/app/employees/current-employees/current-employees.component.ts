import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as EmployeesSelectors from '../employees.selectors';

@Component({
  selector: 'current-employees',
  templateUrl: './current-employees.component.html'
})
export class CurrentEmployeesComponent {
  employeeList: Observable<string[]>;

  constructor(store: Store) {
    this.employeeList = store.select(
      EmployeesSelectors.getCurrentEmployees
    );
  }
}
