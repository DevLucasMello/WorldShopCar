import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localStorage';

@Injectable()
export class VitrineGuard implements CanActivate {

    localStorageUtils = new LocalStorageUtils();

    constructor(protected router: Router) {}

    canActivate(routeAc: ActivatedRouteSnapshot) {
        if(!this.localStorageUtils.obterTokenUsuario()){
            this.router.navigate(['/identidade/login/'], { queryParams: { returnUrl: "/" + routeAc.url }});
        }

        return true;
    }
}
