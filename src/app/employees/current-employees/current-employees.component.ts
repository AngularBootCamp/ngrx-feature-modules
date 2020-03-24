import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../reducers';
import * as EmployeesSelectors from '../employees.selectors';

@Component({
  selector: 'current-employees',
  templateUrl: './current-employees.component.html'
})
export class CurrentEmployeesComponent {
  employeeList: Observable<string[]>;

  constructor(store: Store<AppState>) {
    this.employeeList = store.pipe(
      select(EmployeesSelectors.getCurrentEmployees)
    );
  }
}
