import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseService implements OnInit{  

  constructor(private router: Router) { super() }

  ngOnInit() {
    this.obterUsuarioLogado();
  }

  vitrine(){
    this.router.navigate(['']);
  }

  public obterUsuarioLogado(): boolean{    
    if (this.LocalStorage.obterTokenUsuario()) return true
    else return false;
  }

}
