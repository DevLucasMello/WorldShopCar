import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../shared/components/nav/footer/footer.component';
import { MenuOffComponent } from '../shared/components/nav/menu/menu-off/menu-off.component';
import { MenuOnComponent } from '../shared/components/nav/menu/menu-on/menu-on.component';
import { MenuComponent } from '../shared/components/nav/menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { HomeComponent } from '../vitrine/components/home/home.component';
import { DetalheProdutoComponent } from '../produto/components/detalhe-produto/detalhe-produto.component';
import { ContaService } from './services/conta-service';
import { ToastrModule } from 'ngx-toastr';
import { LoginAppComponent } from './components/login/login-app/login-app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginAppComponent,
    AppComponent,
    FooterComponent,
    MenuComponent,
    MenuOnComponent,
    MenuOffComponent,
    HomeComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
