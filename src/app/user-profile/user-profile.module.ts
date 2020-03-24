import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent }
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule {}
