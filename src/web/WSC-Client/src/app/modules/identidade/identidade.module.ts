import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IdentidadeRoutingModule } from './identidade.route';
import { IdentidadeService } from './services/identidade-service';
import { CustomFormsModule } from 'ng2-validation';
import { IdentidadeGuard } from './services/identidade-guard';
import { RegisterAppComponent } from './components/register/register-app/register-app.component';
import { LoginAppComponent } from './components/login/login-app/login-app.component';
import { IdentidadeAppComponent } from './components/identidade.component';

@NgModule({
  declarations: [
    IdentidadeAppComponent,
    RegisterAppComponent,
    LoginAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IdentidadeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  providers: [
    IdentidadeService,
    IdentidadeGuard
  ]
})
export class IdentidadeModule { }
