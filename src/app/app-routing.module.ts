import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

const routes: Routes = [{
  path: ''
}, {
  path: 'home', canActivate: [() => inject(AuthService).isAuthenticated$]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
