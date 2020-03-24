import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './reducers';
import { getUserName } from './user-profile/user-profile.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: Observable<string>;

  constructor(store: Store<AppState>) {
    this.userName = store.pipe(select(getUserName));
  }
}
