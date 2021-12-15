import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/modules/vitrine/models/vitrine';
import { ProdutoService } from 'src/app/modules/vitrine/services/produto-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  public idProduto: string = "";
  public produto: Produto;
  public imagem = environment.imagensProdutos;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id'];
    this.obterTodosProdutos(this.idProduto);
  }

  obterTodosProdutos(id: string){
    this.produtoService.obterPorId(id)
      .subscribe(
        produto => this.produto = produto,
        error => this.errorMessage);    
  }

}
