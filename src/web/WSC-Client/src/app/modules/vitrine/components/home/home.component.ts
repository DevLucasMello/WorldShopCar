import { Component, OnInit } from '@angular/core';
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
      caminho: "../../../../../assets/images/produtos/camiseta1.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 3,
      valor: 48
    },
    {
      id: "2",
      caminho: "../../../../../assets/images/produtos/camiseta2.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 2,
      valor: 59
    },
    {
      id: "3",
      caminho: "../../../../../assets/images/produtos/camiseta3.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 8,
      valor: 17
    },
    {
      id: "4",
      caminho: "../../../../../assets/images/produtos/camiseta4.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 10,
      valor: 142
    },
    {
      id: "5",
      caminho: "../../../../../assets/images/produtos/caneca1.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 15,
      valor: 39
    },
    {
      id: "6",
      caminho: "../../../../../assets/images/produtos/caneca2.png",
      nome: "Camiseta",
      descricao: "Descrição do produto",
      estoque: 4,
      valor: 107
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  

}
