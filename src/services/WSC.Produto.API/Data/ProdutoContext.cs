using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WSC.Core.Data;

namespace WSC.Produto.API.Data
{
    public class ProdutoContext : DbContext, IUnitOfWork
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options)
            : base(options) { }

        public DbSet<Models.Produto> Produtos { get; set; }        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                property.SetColumnType("varchar(100)");

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProdutoContext).Assembly);
        }

        public async Task<bool> Commit()
        {
            return await base.SaveChangesAsync() > 0;
        }
    }
}
