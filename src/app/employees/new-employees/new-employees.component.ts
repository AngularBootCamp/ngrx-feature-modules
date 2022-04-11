import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as EmployeesActions from '../employees.actions';
import * as EmployeesSelectors from '../employees.selectors';

@Component({
  selector: 'new-employees',
  templateUrl: './new-employees.component.html'
})
export class NewEmployeesComponent {
  newEmpList: Observable<string[]>;

  constructor(private store: Store) {
    this.newEmpList = store.select(
      EmployeesSelectors.getNewEmployees
    );
  }

  ack(employee: string) {
    this.store.dispatch(EmployeesActions.ackEmployee({ employee }));
  }
}
