import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "apps/app/src/app/root/page/page.component";
import { SignComponent } from "apps/app/src/app/auth/sign/sign.component";

const appRoutes: Routes = [
  { path: 'home', component: PageComponent },
  { path: 'auth', component: SignComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
