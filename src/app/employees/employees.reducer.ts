import { createReducer, on } from '@ngrx/store';

import * as EmployeesActions from './employees.actions';
import { EmployeeLists } from './employees.types';

export const employeesFeatureKey = 'employees';

export interface State {
  lists: EmployeeLists;
}

export const initialState: State = {
  lists: {
    newEmployees: [],
    currentEmployees: []
  }
};

export const employeesReducer = createReducer(
  initialState,
  on(EmployeesActions.loadEmployeesSuccess, (state, action) => ({
    ...state,
    lists: action.employees
  })),
  on(EmployeesActions.ackEmployee, (state, action) =>
    acknowledgeEmployee(state, action.employee)
  )
);

function acknowledgeEmployee(
  currentState: State,
  employee: string
): State {
  const newEmployees = currentState.lists.newEmployees.filter(
    x => x !== employee
  );
  const currentEmployees = [
    ...currentState.lists.currentEmployees,
    employee
  ];
  return {
    ...currentState,
    lists: { newEmployees, currentEmployees }
  };
}
