using Microsoft.Extensions.DependencyInjection;
using WSC.Produto.API.Data;
using WSC.Produto.API.Data.Repository;
using WSC.Produto.API.Models;

namespace WSC.Produto.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IProdutoRepository, ProdutoRepository>();
            services.AddScoped<ProdutoContext>();
        }
    }
}
