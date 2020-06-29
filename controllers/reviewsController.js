let db= require('../database/models')
let op= db.Sequelize.Op;
const moduloLogin = require('./modulo-loginController')

module.exports = {
    detail: function(req,res) { //metodo que busca todas las reseñas de la DB
        db.Resena.findAll({
            where: [{
                peliculaId: req.query.serieId, //busca las reseñas donde el id de la pelicula sea igual al serieID que viaja como clave en el query
                
            }],
            include: [{association: 'usuarios'}] //incluye la relacion del modelo de reseñas con el de usuarios
        })
        .then(function(reviews){  //el resultado del findAll lo pasa en el parametro reviews
            res.render('detalle', { //renderiza la vista de detalle donde:
                idPelicula: req.query.serieId, //id pelicula sea al serieid que pasa por query
                reviews: reviews //propiedad valor
               
            })
        })
    },
    create: function(req,res){ //metodo create para agregar nuevos registros a la tabla de la DB
        moduloLogin.validar(req.body.email, req.body.password) //primero validar, viaja por post
        .then(function(usuario) {
            if(usuario != undefined) { //recibe un objeto literal con los datos a modificar y con que valores
                
                db.Resena.create ({
                    peliculaId: req.body.idPelicula, 
                    usuarioId: usuario.id,
                    textoResena: req.body.textoResena,
                    puntaje: req.body.ranking
                })
                .then(function() {
                    res.redirect('/detalle?serieId='+req.body.idPelicula) //si el usuario existe redirige al detalle de esa pelicula updateado con la nueva reseña
                })
            } else {
                res.send("Hubo un error al crear esta reseña") //si el usuario es indefinido no se puede crear la reseña
            }
        })
    }
};
