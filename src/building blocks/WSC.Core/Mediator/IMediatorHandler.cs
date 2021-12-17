using FluentValidation.Results;
using System.Threading.Tasks;
using WSC.Core.Messages;

namespace WSC.Core.Mediator
{
    public interface IMediatorHandler
    {
        Task PublicarEvento<T>(T evento) where T : Event;
        Task<ValidationResult> EnviarComando<T>(T comando) where T : Command;
    }
}
