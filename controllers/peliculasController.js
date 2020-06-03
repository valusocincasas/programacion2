let db= require('../database/models')
let op= db.Sequelize.Op;

module.exports = {
    detail: function(req,res) {
        
        res.send("Estamos accediendo al detalle de la serie" + req.query.idPelicula)
    }
}