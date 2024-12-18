using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using StudentManagementSystemAPI.Data;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<StudentManagementSystemAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("StudentManagementSystemAPIContext") ?? throw new InvalidOperationException("Connection string 'StudentManagementSystemAPIContext' not found.")));

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", builder =>
    {
        builder.WithOrigins("http://localhost:60063") // Replace with your Angular app's URL
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS middleware
app.UseCors("AllowSpecificOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
