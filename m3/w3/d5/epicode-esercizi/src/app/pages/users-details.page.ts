import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
    <ng-container *ngIf="user; else elseTemplate">
      <h3>{{user.name}}</h3>
      <p>email: {{user.email}}</p>
    </ng-container>
    <ng-template #elseTemplate>
      <p>utente non trovato</p>
    </ng-template>
    
  `,
  styles: [
  ]
})
export class UsersDetailsPage implements OnInit {
user:User|undefined
  constructor(private router:ActivatedRoute, private userSrv:UsersService) { }

   ngOnInit() {
    this.router.params.subscribe(async params=>{
      const id = +params['id']
      this.user = await this.userSrv.getUser(id).toPromise()
    })
  }

}
