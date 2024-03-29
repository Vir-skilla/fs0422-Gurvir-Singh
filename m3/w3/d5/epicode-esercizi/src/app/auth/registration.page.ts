import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="container" >
    <form #form="ngForm" (ngSubmit)="onsubmit(form)" >
      <div class="form-group">
        <label for="name">Nome Completo</label>
        <input name="name" required ngModel class="form-control" id="name"  type="text">
      </div>
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
            class="form-control"
            required
            ngModel
            id="pass"
            type="password"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-4">Registrati
          <span *ngIf="isLoading" class="spinner-border spinner-border-sm" role="status" ></span>
        </button>
    </form>
  </div>
  `,
  styles: [
  ]
})
export class RegistrationPage implements OnInit {
isLoading=false
  constructor(private authSrv:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async onsubmit(form:NgForm){
    this.isLoading=true
    console.log(form.value)
    try {
      await this.authSrv.registration(form.value).toPromise()
      this.router.navigate(['/login'])
      this.isLoading=false
    } catch (error) {
      console.error(error)
      this.isLoading=false

    }
  }

}
