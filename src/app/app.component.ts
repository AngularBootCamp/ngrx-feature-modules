import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getUserName } from './user-profile/user-profile.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: Observable<string>;

  constructor(store: Store) {
    this.userName = store.select(getUserName);
  }
}
