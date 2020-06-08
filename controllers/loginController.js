const db = require('../database/models');
const login = require('./modulo-loginController');
const OP = db.Sequelize.Op;
let bcrypt =require('bcryptjs');

const controlador = {
    login: (req,res) =>{
        res.render ('modulo-login')
    },
  /*  processLogin: (req, res) => {

        login.buscarPorEmail(req.body.email)
        .then(usuario => {
           if(usuario){
            // verificar sus datos
            //res.send(usuario)
            login.validar(req.body.email, req.body.psw)
            .then(usuario2 => {
               // res.send(usuario2)
                if(usuario2){
                    // cuando es todo correcto
                    res.redirect('/buscaUsuario/detalleUsuario' + resultado.id)
                } else {
                    // la password esta mal
                    res.redirect('/login')
                }
            })
           } else {
               res.redirect('/usuarios/index')
           }
        })
    },
    
*/
    
    logUser: function (req,res) {
    res.render ('modulo-login')
    },
    confirmUser: function (req,res) {
        login.validar (req.body.email, req.body.psw)
        .then (resultado => {
        if (resultado ==undefined) {
        res.redirect ('/login/reviews'); } //redirecciona de nuevo al login
        else {
        res.redirect ('/login/reviews/'+  resultado.id) }
        })
        }, 
        
        
        getReviews: function(req,res) {
            db.Resena.findAll({
               //where: {
                   
                   // usuarioId: req.params.id
                    
            // }
            })
            .then (resultado => {
                //return res.send (resultado);
                     res.render ('reviews', {resultado: resultado} )
                   
                })
            
        },


        /* getReviews: function (req,res) {
        db.Resena.findAll ({
        where: [{usuarioId: req.params.id }], 
        include: ['usuarios']
         })
        .then (resultado => {
       return res.send (resultado);
            res.render ('reviews', {resultado: resultado} )
        })
        },
        */
        
        showEdit: function (req,res) {
        db.Resena.findOne ({
        where: [{Id: req.params.id }]
         })
        .then (resultado => {
        //return res.send (resultado);
            res.render ('editReview', {resultado: resultado} )
        })
        },
        
        confirmEdit: function (req,res) {
        login.validar  (req.body.email, req.body.psw)
        .then (resultado => {
        if (resultado !=undefined) {
        db.resena.update ({
        resena: req.body.resena, 
        puntaje: req.body.puntaje 
        },
        {
        where: {
        id: req.params.id,
        }
        })
        .then(() => {
        res.redirect ('/login/reviews/' + resultado.id );
        })
        } else {
        return res.send ('Tenes mal los datos de acceso')
        return res.redirect ('/login/reviews/edit/' + req.params.id);
        }
        });
        },
        
        deleteReview:  function (req,res) {
        res.render ('loginForReviewDelete', {deleteId: req.params.id });
        },
        
        confirmDelete: function (req,res) {
        login.validar (req.body.email, req.body.psw)
        .then (resultado => {
        if (resultado !=null) {
        db.resena.destroy ({
        where: {
        id: req.params.id, 
        }
        })
        res.redirect ('/login/reviews/' + resultado.id);
        } else {
        res.redirect ('/login/reviews/delete/' + req.params.id);
        }
        })
        }
        
        

};
module.exports = controlador