import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from './auth/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li *ngIf="isLogged()" class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li *ngIf="isLogged()" class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li *ngIf="user" class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li *ngIf="!user" class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li *ngIf="!user" class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/registration']"
                routerLinkActive="active"
                >Registrati</a
              >
            </li>
          </ul>

          <h6 *ngIf="user">
            Benvenuto {{user.user.name}}
          </h6>
          <button *ngIf="user" (click)="logout()" class="btn btn-danger">logout</button>

        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  user!: AuthData | null;
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
    });
  }
  logout() {
    this.authSrv.logout();
  }
  isLogged():boolean {
    return this.authSrv.isUserLogged()
  }
}
