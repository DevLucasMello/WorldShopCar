using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WSC.Produto.API.Models;

namespace WSC.Produto.API.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/produto")]
    public class ProdutoController : Controller
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
