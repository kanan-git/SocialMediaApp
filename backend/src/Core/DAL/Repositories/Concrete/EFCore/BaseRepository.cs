using System;
using System.Text;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

using src.Core.DAL.Repositories.Abstract;

namespace src.Core.DAL.Repositories.Concrete;

public class BaseRepository<TEntity, TContext> : IBaseRepository<TEntity> 
    where TEntity : class,new() 
    where TContext : DbContext
{
    private readonly TContext _context;
    public BaseRepository(TContext context)
    {
        _context = context;
    }

    public async Task<List<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> filter = null, params string[] includes)
    {
        // IQueryable<Comment> query = _context.Comments;
        // query = GetQuery(includes);
        var query = GetQuery(includes);
        return filter == null 
            ? await query.ToListAsync() 
            : await query.Where(filter).ToListAsync();
    }

    public async Task<List<TEntity>> GetAllWithPaginateAsync(int page, int size, Expression<Func<TEntity, bool>> filter = null, params string[] includes)
    {
        var query = GetQuery(includes);
        return filter == null 
            ? await query.Skip((page - 1) * size).Take(size).ToListAsync() 
            : await query.Skip((page - 1) * size).Take(size).Where(filter).ToListAsync();
    }

    public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> filter, params string[] includes)
    {
        var query = GetQuery(includes);
        return await query.FirstOrDefaultAsync(filter);
    }

    public async Task AddAsync(TEntity entity)
    {
        await _context.Set<TEntity>().AddAsync(entity);
    }

    public void Update(TEntity entity)
    {
        _context.Set<TEntity>().Update(entity);
    }

    public void Remove(TEntity entity)
    {
        _context.Set<TEntity>().Remove(entity);
    }

    // public async Task<int> SaveAsync()
    // {
    //     return await _context.SaveChangesAsync();
    // }

    public IQueryable<TEntity> GetQuery(string[] includes)
    {
        IQueryable<TEntity> query = _context.Set<TEntity>();
        foreach(var include in includes)
        {
            query = query.Include(include);
        }
        return query;
    }

    public Task<bool> IsExistEntity(Expression<Func<TEntity, bool>> filter)
    {
        return _context.Set<TEntity>().AnyAsync(filter);
    }
}
