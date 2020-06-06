let db = require('../database/models')
const OP = db.Sequelize.Op
console.log(OP)

let buscaUsuario = {

    porId: function(req,res){
        db.usuarios
        .findByPk(req.params.id)
        .then (function(usuario){
            db.Resena
            .findAll({
                where: {
                    usuarioId: req.params.id, 
                }
            })
            .then (function(reviews){
                return res.render ('detalleUsuario',{reviews:reviews,usuario:usuario});
            })
        })
        
    },

    vista: function (req, res) {
        res.render('buscaUsuario');
    },
    buscador: function (req,res) {
        res.render ('buscaUsuario')
    },
    busqueda: function (req, res) {
         db.usuarios.findAll({
            where: {
                email: { [OP.like]: '%' + req.body.email + '%'}
            },
        })
        .then(function(usuarioBuscado) {
            console.log(usuarioBuscado)
            res.render('usuarioBuscado', {
                usuarioBuscado: usuarioBuscado
            })


           /* if(usuarioBuscado.length == 0) {
                res.render('usuarioBuscado', {
                    usuarioBuscado: 'No se encontraron resultados para ese Email'
                })
    
    } 
            else if(usuarioBuscado.length > 0) {
                res.render('usuarioBuscado', {
                    usuarioBuscado: 'Estos son los resultados encontrados'
                })
            }*/
    } ) } }


module.exports = buscaUsuario; 