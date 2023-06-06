import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn: boolean = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storageService.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;

      if (this.isLoggedIn) {
        const user = this.storageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        this.storageService.clean();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
