import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

const routes:Route[] = [
  {
    path:"",
    component:HomePage
  },
  {
    path:"active-posts",
    component:ActivePostsPage,
    canActivate:[AuthGuard],

  },
  {
    path:"inactive-posts",
    component:InactivePostsPage,
    canActivate:[AuthGuard],

  },
  {
    path:"active-posts/:id",
    component:PostDetailsPage,
    canActivate:[AuthGuard],
  },
  {
    path:"inactive-posts/:id",
    component:PostDetailsPage,
    canActivate:[AuthGuard],

  },
  {
    path:"users",
    component:UsersPage,
    children:[
      {
        path:":id",
        component:UsersDetailsPage
      }
    ]
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
