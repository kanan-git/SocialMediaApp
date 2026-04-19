using System;
using System.Text;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace src.Core.DAL.Repositories.Abstract;

public interface IBaseRepository<TEntity> 
    where TEntity : class,new()
{
    public Task<List<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null, params string[] includes);
    public Task<List<TEntity>> GetAllWithPaginateAsync(int page, int size, Expression<Func<TEntity, bool>> filter = null, params string[] includes);
    public Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter, params string[] includes);
    public Task AddAsync(TEntity entity);
    public void Update(TEntity entity);
    public void Remove(TEntity entity);
    public IQueryable<TEntity> GetQuery(string[] includes);
    public Task<bool> IsExistEntity(Expression<Func<TEntity, bool>> filter);
}
