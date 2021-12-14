using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WSC.Core.Data;
using WSC.Produto.API.Models;

namespace WSC.Produto.API.Data.Repository
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly ProdutoContext _context;

        public ProdutoRepository(ProdutoContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Models.Produto>> ObterTodos()
        {
            return await _context.Produtos.AsNoTracking().ToListAsync();
        }

        public async Task<Models.Produto> ObterPorId(Guid id)
        {
            return await _context.Produtos.FindAsync(id);
        }        

        public void Adicionar(Models.Produto produto)
        {
            _context.Produtos.Add(produto);
        }

        public void Atualizar(Models.Produto produto)
        {
            _context.Produtos.Update(produto);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
