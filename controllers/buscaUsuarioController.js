let db = require('../database/models')
const OP = db.Sequelize.Op
console.log(OP)

let buscaUsuario = {
    vista: function (req, res) {
        res.render('buscaUsuario');
    },
    busqueda: function (req, res) {
        return db.usuarios.findAll({
            where: {
                email: { [OP.like]: '%' + req.body.email + '%'}
            },
        })
        .then(function(usuarioBuscado) {
            console.log(usuarioBuscado)
            if(usuarioBuscado.length == 0) {
                res.render('usuarioBuscado', {
                    usuarioBuscado: 'No se encontraron resultados para ese Email'
                })
    
    } 
            else if(usuarioBuscado.length > 0) {
                res.render('usuarioBuscado', {
                    usuarioBuscado: 'Estos son los resultados encontrados'
                })
            }
    } ) } }


module.exports = buscaUsuario; 