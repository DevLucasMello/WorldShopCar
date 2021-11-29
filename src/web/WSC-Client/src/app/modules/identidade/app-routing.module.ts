import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../vitrine/components/home/home.component';
import { LoginAppComponent } from './components/login/login-app/login-app.component';
import { RegisterAppComponent } from './components/register/register-app/register-app.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginAppComponent},
  { path: 'registro', component: RegisterAppComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
