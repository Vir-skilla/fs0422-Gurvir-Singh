import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="container">
      <form #form="ngForm" (ngSubmit)="accedi(form)">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            name="email"
            class="form-control"
            required
            ngModel
            id="email"
            type="email"
          />
        </div>
        <div class="form-group">
          <label for="pass">Password</label>
          <input
            name="password"
            required
            class="form-control"
            ngModel
            id="pass"
            type="password"
          />
        </div>
        <button type="submit" [disabled]="form.invalid" class="btn btn-primary mt-4">Accedi</button>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
  isLoading = false
  constructor(private authSrv:AuthService, private router:Router) {}

  ngOnInit(): void {}

  async accedi(form: NgForm) {
    this.isLoading = true
    console.log(form.value);
    try {
      await this.authSrv.login(form.value).toPromise()
      this.isLoading = false
      this.router.navigate(['/users'])
    } catch (error) {
      this.isLoading = false
      console.error(error)
    }
  }
}
