import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Produto } from '../../models/vitrine';
import { ProdutoService } from '../../services/produto-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public produtos: Produto[];
  public imagem = environment.imagensProdutos;
  errorMessage: string;

  constructor(
    private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.obterTodosProdutos();    
  }

  detalhe(id: string){
    this.router.navigate(['detalhe/' + id]);
  }
  
  obterTodosProdutos(){
    this.produtoService.obterTodos()
      .subscribe(
        produtos => this.produtos = produtos,
        error => this.errorMessage);    
  }
}