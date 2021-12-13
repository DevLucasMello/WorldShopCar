import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.css']
})
export class MenuOnComponent extends BaseService implements OnInit {

  isCollapsed = true;

  constructor() { super() }

  ngOnInit() {
  }

  sair(){
    this.LocalStorage.limparDadosLocaisUsuario();
    window.location.href = '';
  }

}
