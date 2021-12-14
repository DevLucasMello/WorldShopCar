import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IdentidadeAppComponent } from './components/identidade.component';
import { RegisterAppComponent } from './components/register/register-app/register-app.component';
import { LoginAppComponent } from './components/login/login-app/login-app.component';
import { IdentidadeGuard } from './services/identidade-guard';

const identidadeRouterConfig: Routes = [
  {
    path: '', component: IdentidadeAppComponent,
    children: [
      { path: 'registro', component: RegisterAppComponent, canActivate:[IdentidadeGuard], canDeactivate: [IdentidadeGuard] },
      { path: 'login', component: LoginAppComponent, canActivate:[IdentidadeGuard] }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(identidadeRouterConfig)
  ],
  exports: [RouterModule]
})
export class IdentidadeRoutingModule { }
