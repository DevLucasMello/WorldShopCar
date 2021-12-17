using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WSC.Cliente.API.Application.Commands;
using WSC.Core.Mediator;
using WSC.WebAPI.Core.Controllers;

namespace WSC.Cliente.API.Controllers
{
    public class ClienteController : MainController
    {
        private readonly IMediatorHandler _mediatorHandler;

        public ClienteController(IMediatorHandler mediatorHandler)
        {
            _mediatorHandler = mediatorHandler;
        }

        [HttpGet("clientes")]
        public async Task<IActionResult> Index()
        {
            var resultado = await _mediatorHandler.EnviarComando(
                new RegistrarClienteCommand(Guid.NewGuid(), "Lucas", "lucas@teste.com", "30314299076"));

            return CustomResponse(resultado);
        }
    }
}
