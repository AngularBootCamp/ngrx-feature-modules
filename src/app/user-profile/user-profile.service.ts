import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

import { UserProfile } from './user-profile.types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  constructor(private http: HttpClient) {}

  loadUserProfile(): Observable<UserProfile> {
    const username = 'lgraham'; // This would be retrieved from auth system
    const params = { username };

    return this.http
      .get<UserProfile[]>(apiUrl + '/users', { params })
      .pipe(
        map(users => {
          if (!users.length) {
            throw new Error('not found');
          }
          return users[0];
        })
      );
  }

  saveUserProfile(profile: UserProfile) {
    // return this.http.put(`${apiUrl}/users/${profile.id}`, profile);
    return of(profile);
  }
}
