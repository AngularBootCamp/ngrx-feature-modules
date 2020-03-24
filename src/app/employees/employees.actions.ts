import { createAction, props } from '@ngrx/store';

import { EmployeeLists } from './employees.types';

export const ackEmployee = createAction(
  '[Employees] ACK_EMPLOYEE',
  props<{ employee: string }>()
);

export const loadEmployees = createAction(
  '[Employees] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employees] Load Employees Success',
  props<{ employees: EmployeeLists }>()
);

export const loadEmployeesFailure = createAction(
  '[Employees] Load Employees Failure',
  props<{ error: any }>()
);
