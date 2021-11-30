import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vitrine } from '../../models/vitrine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vitrine: Vitrine[] = [
    {
      id: "1",
      caminho: "../../../../../assets/images/produtos/camiseta1.jpg",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 3,
      valor: 48
    },
    {
      id: "2",
      caminho: "../../../../../assets/images/produtos/camiseta2.jpg",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 2,
      valor: 59
    },
    {
      id: "3",
      caminho: "../../../../../assets/images/produtos/camiseta3.jpg",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 8,
      valor: 17
    },
    {
      id: "4",
      caminho: "../../../../../assets/images/produtos/camiseta4.jpg",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 10,
      valor: 142
    },
    {
      id: "5",
      caminho: "../../../../../assets/images/produtos/caneca1.jpg",
      nome: "Caneca",
      descricao: "Descrição do produto",
      estoque: 15,
      valor: 39
    },
    {
      id: "6",
      caminho: "../../../../../assets/images/produtos/caneca2.jpg",
      nome: "Caneca",
      descricao: "Descrição do produto",
      estoque: 4,
      valor: 107
    },
    {
      id: "7",
      caminho: "../../../../../assets/images/produtos/caneca3.jpg",
      nome: "Caneca",
      descricao: "Descrição do produto",
      estoque: 2,
      valor: 19
    },
    {
      id: "8",
      caminho: "../../../../../assets/images/produtos/caneca4.jpg",
      nome: "Caneca",
      descricao: "Descrição do produto",
      estoque: 7,
      valor: 48
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detalhe(){
    this.router.navigate(['detalhe']);
  }  

}
