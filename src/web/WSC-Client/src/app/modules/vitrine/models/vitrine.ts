export interface Produto{
  Id: string;
  Nome: string;
  Descricao: string;
  Ativo: boolean;
  Valor: number;
  DataCadastro: Date;
  Imagem: string;
  QuantidadeEstoque: number;
}