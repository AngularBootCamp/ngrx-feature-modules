import { Injectable } from '@angular/core';
import {
  Actions,
  OnInitEffects,
  createEffect,
  ofType
} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Employee, EmployeeLoader } from './employee-loader.service';
import * as EmployeesActions from './employees.actions';

function toName(employee: Employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

@Injectable()
export class EmployeesEffects implements OnInitEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      switchMap(() =>
        this.loader.getList().pipe(
          map(employees =>
            EmployeesActions.loadEmployeesSuccess({
              employees: {
                currentEmployees: employees.slice(0, 4).map(toName),
                newEmployees: employees.slice(4, 6).map(toName)
              }
            })
          ),
          catchError(error =>
            of(EmployeesActions.loadEmployeesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private loader: EmployeeLoader
  ) {}

  ngrxOnInitEffects(): Action {
    return EmployeesActions.loadEmployees();
  }
}
