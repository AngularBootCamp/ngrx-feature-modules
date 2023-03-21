import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { userProfileActions } from './user-profile.actions';
import { selectUserProfile } from './user-profile.selectors';
import { UserProfile } from './user-profile.types';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  userProfile: Observable<UserProfile | undefined>;
  profileForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
  }>;

  constructor(private store: Store, fb: NonNullableFormBuilder) {
    this.profileForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.userProfile = store.select(selectUserProfile).pipe(
      tap(p => {
        this.profileForm.patchValue(p || {}, { emitEvent: false });
        this.profileForm.reset(this.profileForm.value); // resets pristine flag
      })
    );
  }

  saveUser(userProfile: UserProfile) {
    const profile: UserProfile = {
      ...userProfile,
      ...this.profileForm.value
    };
    this.store.dispatch(
      userProfileActions.saveUserProfile({ profile })
    );
  }
}
