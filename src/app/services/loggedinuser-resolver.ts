import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedinResolverService implements Resolve<User | null> {
  constructor(private userService: UserService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    const loggedUser = this.userService.getLoggedUser();
    if (!loggedUser) {
      this.router.navigateByUrl('/signup');
      return null;
    } else {
      return loggedUser;
    }
  }
}
