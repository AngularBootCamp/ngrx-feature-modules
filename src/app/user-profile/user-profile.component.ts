import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as UserProfileActions from './user-profile.actions';
import { getUserProfile } from './user-profile.selectors';
import { UserProfile } from './user-profile.types';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnDestroy {
  private subscription: Subscription;

  userProfile: UserProfile | undefined;
  profileForm: FormGroup;

  constructor(private store: Store, fb: FormBuilder) {
    this.profileForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.subscription = store.select(getUserProfile).subscribe(p => {
      this.userProfile = p;
      this.profileForm.patchValue(p || {}, { emitEvent: false });
      this.profileForm.reset(this.profileForm.value); // resets pristine flag
    });
  }

  saveUser() {
    const profile: UserProfile = {
      ...this.userProfile,
      ...this.profileForm.value
    };
    this.store.dispatch(
      UserProfileActions.saveUserProfile({ profile })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
