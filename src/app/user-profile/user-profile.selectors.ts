import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUserProfile from './user-profile.reducer';

export const selectUserProfileState =
  createFeatureSelector<fromUserProfile.State>(
    fromUserProfile.userProfileFeatureKey
  );

export const getUserProfile = createSelector(
  selectUserProfileState,
  state => state.userProfile
);

export const getUserName = createSelector(
  getUserProfile,
  profile => profile?.name || ''
);
