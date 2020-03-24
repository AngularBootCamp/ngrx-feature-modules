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

import * as UserProfileActions from './user-profile.actions';
import { UserProfileService } from './user-profile.service';

@Injectable()
export class UserProfileEffects implements OnInitEffects {
  loadUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserProfileActions.loadUserProfile),
      switchMap(() =>
        this.userProfileSvc.loadUserProfile().pipe(
          map(profile =>
            UserProfileActions.loadUserProfileSuccess({ profile })
          ),
          catchError(error =>
            of(UserProfileActions.loadUserProfileFailure({ error }))
          )
        )
      )
    );
  });

  saveUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.saveUserProfile),
      switchMap(action =>
        this.userProfileSvc.saveUserProfile(action.profile).pipe(
          map(profile =>
            UserProfileActions.loadUserProfileSuccess({ profile })
          ),
          catchError(error =>
            of(UserProfileActions.loadUserProfileFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileSvc: UserProfileService
  ) {}

  ngrxOnInitEffects(): Action {
    return UserProfileActions.loadUserProfile();
  }
}
