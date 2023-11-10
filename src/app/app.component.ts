import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterLink,
  RouterOutlet
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectUserName } from './user-profile/user-profile.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, AsyncPipe]
})
export class AppComponent {
  userName: Observable<string>;

  constructor(store: Store) {
    this.userName = store.select(selectUserName);
  }
}
