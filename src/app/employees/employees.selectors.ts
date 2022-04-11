import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromEmployees from './employees.reducer';

const selectEmployeesState =
  createFeatureSelector<fromEmployees.State>(
    fromEmployees.employeesFeatureKey
  );

const getEmployeeLists = createSelector(
  selectEmployeesState,
  state => state.lists
);

// defensive copy of the data coming out of the store
// createSelector will memoize (cache) the result, meaning it will
// give the same object until the state changes
export const getNewEmployees = createSelector(
  getEmployeeLists,
  state => [...state.newEmployees]
);

export const getCurrentEmployees = createSelector(
  getEmployeeLists,
  state => [...state.currentEmployees]
);
