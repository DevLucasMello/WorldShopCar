import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { RegisterAppComponent } from '../components/register/register-app/register-app.component';

@Injectable()
export class IdentidadeGuard implements CanDeactivate<RegisterAppComponent>, CanActivate{

  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router){}

  canDeactivate(component: RegisterAppComponent) {
    if(component.mudancasNaoSalvas){
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
    }
    return true;
  }

  canActivate() {
    if(this.localStorageUtils.obterTokenUsuario()){
      this.router.navigate(['']);
    }

    return true;
  }
}
