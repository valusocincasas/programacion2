let db= require('../database/models')
let op= db.Sequelize.Op;

module.exports = {
    detail: function(req,res) {
        db.Resena.findAll({
            where: {
                peliculaId: req.query.serieId
            }
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
                    idPelicula: req.body.serieId,
                    idUser: usuario.id,
                    text: req.body.textoResena,
                    ranking: req.body.puntaje
                })
                .then(function() {
                    res.redirect('/detalle/?idPelicula='+req.body.peliculaId)
                })
            } else {
                res.send("Hubo un error al crear esta reseña")
            }
        })
    }
};
