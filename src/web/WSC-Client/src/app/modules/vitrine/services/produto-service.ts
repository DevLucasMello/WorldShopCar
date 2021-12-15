import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { BaseService } from 'src/app/services/base.service';
import { Produto } from "../models/vitrine";

@Injectable()
export class ProdutoService extends BaseService {

    constructor(private http: HttpClient) { super() }
    
    obterTodos(): Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlServiceProduto + "todos", super.ObterHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Produto> {
        return this.http
            .get<Produto>(this.UrlServiceProduto + "porId/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }
}