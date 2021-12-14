import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuOnComponent } from './menu/menu-on/menu-on.component';
import { MenuOffComponent } from './menu/menu-off/menu-off.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuOnComponent,
    MenuOffComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    MenuOnComponent,
    MenuOffComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent
  ]
})

export class NavModule {}
