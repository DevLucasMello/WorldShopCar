import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../identidade/components/root/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetalheProdutoComponent } from '../produto/components/detalhe-produto/detalhe-produto.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from '../shared/components/nav/nav.module';
import { ErrorInterceptor } from 'src/app/services/error.handler.service';
import { VitrineGuard } from './services/vitrine.guard';
import { ProdutoService } from './services/produto-service';
import { NgBrazil } from 'ng-brazil';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

@NgModule({
  declarations: [    
    AppComponent,    
    HomeComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    NgbModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    NgBrazil
  ],
  providers: [
    httpInterceptorProviders, 
    VitrineGuard,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
