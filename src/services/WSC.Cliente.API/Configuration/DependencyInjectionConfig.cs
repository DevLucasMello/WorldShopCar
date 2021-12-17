using FluentValidation.Results;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using WSC.Cliente.API.Application.Commands;
using WSC.Cliente.API.Application.Events;
using WSC.Cliente.API.Data;
using WSC.Cliente.API.Data.Repository;
using WSC.Cliente.API.Models;
using WSC.Core.Mediator;

namespace WSC.Cliente.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<RegistrarClienteCommand, ValidationResult>, ClienteCommandHandler>();

            services.AddScoped<INotificationHandler<ClienteRegistradoEvent>, ClienteEventHandler>();

            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<ClienteContext>();
        }
    }
}
