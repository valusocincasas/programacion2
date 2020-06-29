let db = require('../database/models')
const OP = db.Sequelize.Op
console.log(OP)

let buscaUsuario = {

    porId: function(req,res){ //busca en la DB usuarios por su id
        db.usuarios
        .findByPk(req.params.id) 
        .then (function(usuario){
            db.Resena
            .findAll({ 
                where: {
                    usuarioId: req.params.id, //busca el usuario con el id pasado, usuarioId es el nombre de la columna
                }
            })
            .then (function(reviews){ //then por que es un findAll, osea un pedido asincronico
                return res.render ('detalleUsuario',{reviews:reviews,usuario:usuario}); //renderiza la vista de detalleUsuario
                //pasa como parametros reviews y usuario
            })
        })
        
    },

    vista: function (req, res) {
        res.render('buscaUsuario');
    },
    buscador: function (req,res) {
        res.render ('buscaUsuario')
    }, //renderiza la vista busca usuario, va por get por que es un formulario
    busqueda: function (req, res) { //viaja por post por que el cliente envia datos sensibles al servidor
         db.usuarios.findAll({ //pedido asincronico, busca todos los usuarios de la DB, usa el modelo entonces lo requiere antes 
            where: {
                email: { [OP.like]: '%' + req.body.email + '%'} //requiere un operador de sequelize, importados arriba de todo
            },
        })
        .then(function(usuarioBuscado) {
            console.log(usuarioBuscado) //imprime el resultado de la busqueda
            res.render('usuarioBuscado', { //renderiza la vista del usuario buscado
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