using System.Threading.Tasks;

namespace WSC.Core.Data
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}
