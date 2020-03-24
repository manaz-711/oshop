import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService,private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser=>appUser.isAdmin)
    )
  }
  // canActivate(): Observable<boolean> {
  //   return this.auth.user$.pipe(
  //     switchMap(user => this.userService.get(user.uid).valueChanges()),
  //     map(appUser => appUser.isAdmin)
  //   );
  // }
}
