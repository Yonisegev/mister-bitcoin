import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Contacts', icon: 'pi pi-fw pi-users', routerLink: 'contact' },
      {
        label: 'Statistics',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: 'statistics',
      },
      {
        label: 'Logout',
        command: () => {
          this.userService.logout();
          this.router.navigateByUrl('/signup');
        },
        icon: 'pi pi-sign-out',
      },
    ];

    this.activeItem = this.items[0];
  }
}
