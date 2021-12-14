import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.css']
})
export class MenuOnComponent extends BaseService implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { super() }

  ngOnInit() {
  }

  sair(){
    this.LocalStorage.limparDadosLocaisUsuario();
    this.router.navigate(['']);;
  }

}
