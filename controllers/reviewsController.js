let db= require('../database/models')
let op= db.Sequelize.Op;
const moduloLogin = require('./modulo-loginController')

module.exports = {
    detail: function(req,res) {
        db.Resena.findAll({
            where: [{
                peliculaId: req.query.serieId,
                
            }],
            include: [{association: 'usuarios'}]
        })
        .then(function(reviews){
            res.render('detalle', {
                idPelicula: req.query.serieId,
                reviews: reviews
               
            })
        })
    },
    create: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(usuario) {
            if(usuario != undefined) {
                
                db.Resena.create ({
                    peliculaId: req.body.idPelicula,
                    usuarioId: usuario.id,
                    textoResena: req.body.textoResena,
                    puntaje: req.body.ranking
                })
                .then(function() {
                    res.redirect('/detalle?serieId='+req.body.idPelicula)
                })
            } else {
                res.send("Hubo un error al crear esta reseña")
            }
        })
    }
};
