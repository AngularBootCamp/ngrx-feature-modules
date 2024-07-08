import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EmployeeDisplayComponent } from '../employee-display/employee-display.component';
import { employeesActions } from '../employees.actions';
import * as EmployeesSelectors from '../employees.selectors';

@Component({
  selector: 'app-new-employees',
  templateUrl: './new-employees.component.html',
  standalone: true,
  imports: [EmployeeDisplayComponent, AsyncPipe]
})
export default class NewEmployeesComponent {
  newEmpList: Observable<string[]>;

  constructor(private store: Store) {
    this.newEmpList = store.select(
      EmployeesSelectors.selectNewEmployees
    );
  }

  ack(employee: string) {
    this.store.dispatch(employeesActions.ackEmployee({ employee }));
  }
}
