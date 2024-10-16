using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Api.Models;
using Microsoft.EntityFrameworkCore;
namespace Api.Data;

public class ApplicationDbContext : IdentityDbContext<User> {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
}