using System;

namespace WSC.Core.DomainObjects
{
    public interface IRepository<T> : IDisposable where T : IAggregateRoot
    {        
    }
}