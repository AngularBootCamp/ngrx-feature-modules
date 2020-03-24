import { createAction, props } from '@ngrx/store';

import { UserProfile } from './user-profile.types';

export const loadUserProfile = createAction(
  '[UserProfile] Load UserProfile'
);

export const loadUserProfileSuccess = createAction(
  '[UserProfile] Load UserProfile Success',
  props<{ profile: UserProfile }>()
);

export const loadUserProfileFailure = createAction(
  '[UserProfile] Load UserProfile Failure',
  props<{ error: any }>()
);

export const saveUserProfile = createAction(
  '[UserProfile] Save UserProfile',
  props<{ profile: UserProfile }>()
);

export const saveUserProfileSuccess = createAction(
  '[UserProfile] Save UserProfile Success',
  props<{ profile: UserProfile }>()
);

export const saveUserProfileFailure = createAction(
  '[UserProfile] Save UserProfile Failure',
  props<{ error: any }>()
);
