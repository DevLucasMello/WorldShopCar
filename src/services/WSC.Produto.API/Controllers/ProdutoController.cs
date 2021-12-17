using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WSC.Produto.API.Models;
using WSC.WebAPI.Core.Controllers;

namespace WSC.Produto.API.Controllers{
    
    [Authorize]
    [Route("api/produto")]
    public class ProdutoController : MainController
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutoController(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        [AllowAnonymous]
        [HttpGet("todos")]
        public async Task<IEnumerable<Models.Produto>> ObterTodos()
        {
            return await _produtoRepository.ObterTodos();
        }

        [HttpGet("porId/{id}")]
        public async Task<Models.Produto> ProdutoDetalhe(Guid id)
        {
            return await _produtoRepository.ObterPorId(id);
        }
    }
}
