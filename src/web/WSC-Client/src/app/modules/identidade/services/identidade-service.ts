import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { BaseService } from 'src/app/services/base.service';
import { Usuario } from "../models/Usuario";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class IdentidadeService extends BaseService {

    constructor(private http: HttpClient) { super() }
    
    login(usuario: Usuario): Observable<Usuario> {
        let response = this.http.post(`${this.UrlServiceIdentidade}autenticar`,usuario, super.ObterHeaderJson())
        .pipe(
            map(this.extractDataAuth),
            catchError(this.serviceError))

        return response;
    }

    registro(usuario: Usuario): Observable<Usuario> {
        let response = this.http.post(`${this.UrlServiceIdentidade}nova-conta`,usuario, super.ObterHeaderJson())
        .pipe(
            map(this.extractDataAuth),
            catchError(this.serviceError))

        return response;
    }
}