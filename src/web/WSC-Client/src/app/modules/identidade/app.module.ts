import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../shared/components/nav/footer/footer.component';
import { MenuOffComponent } from '../shared/components/nav/menu/menu-off/menu-off.component';
import { MenuOnComponent } from '../shared/components/nav/menu/menu-on/menu-on.component';
import { MenuComponent } from '../shared/components/nav/menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    MenuOnComponent,
    MenuOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
