var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buscadorRouter = require('./routes/buscador');
var detalleRouter = require('./routes/detalle');
var homeRouter = require('./routes/home');
var seriesByGenreRouter = require('./routes/seriesByGenre');
var seriesGenresRouter = require('./routes/seriesGenres');
var resultadoBusquedaRouter = require('./routes/resultadoBusqueda');
var usuariosRouter = require ('./routes/usuarios');
var loginRouter = require ('./routes/modulo-login');
var logRouter = require ('./routes/login');
var buscaUsuarioRouter = require ('./routes/buscaUsuario');
var reviewsRouter = require ('./routes/reviews'); 
var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //setup de view engine que se va a utilizar, extension de las vistas

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//acceso libre a todo lo que se encuentre en la carpeta public 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/buscador',buscadorRouter);
app.use ('/detalle',detalleRouter);
app.use ('/home',homeRouter);
app.use ('/seriesbygenre',seriesByGenreRouter);
app.use ('/seriesGenres',seriesGenresRouter);
app.use ('/resultadoBusqueda',resultadoBusquedaRouter);
app.use ('/usuarios',usuariosRouter);
app.use ('/validacion',loginRouter);
app.use ('/login',logRouter);
app.use ('/buscaUsuario',buscaUsuarioRouter);
app.use ('/reviews',reviewsRouter);
app.use (express.urlencoded ({ extended:false}));
app.use (express.json ()); //aclararle a la app que todo lo que llegue por un formulario hay que capturarlo como objeto literal y poder convertirlo a json

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
