const db = require('../database/models');
const login = require('./modulo-loginController'); //se lo requiere para usarlo en el metodo confirmUser
const OP = db.Sequelize.Op;
let bcrypt =require('bcryptjs'); //lo requiere para el hasheo de la contraseña

const controlador = {
    login: (req,res) =>{
        res.render ('modulo-login') //renderiza la vista de modulo-login (formulario de login)
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
    res.render ('modulo-login') //renderiza la vista de modulo-login
    },
    confirmUser: function (req,res) { //va por post, el usuario ingresa datos sensibles y los envia al servidor
        login.validar (req.body.email, req.body.psw) //validar es un metodo del modulo login, y los datos del formulario de la vista
        .then (resultado => {
        if (resultado ==undefined) { 
        res.redirect ('/login/reviews'); } //redirecciona de nuevo al login
        else {
        res.redirect ('/login/reviews/'+  resultado.id) } //redirecciona a las reseñas de el usuario que ingreso
        })
        }, 
        
        
        getReviews: function(req,res) {
            db.Resena.findAll({ //busca todas las reseñas de la DB
            where: [{
                   
                   usuarioId: req.params.id, //reseñas donde el usuario id coincide con el id que viajo en el params
                   
                    
          }],
           include: ['usuarios'] //incluye la relacion de usuarios con las reseñas (declaradas en el modelo)
            })
            .then (resultado => {
                //return res.send (resultado);
                     res.render ('reviews', {resultado: resultado} ) //renderiza la vista de reviews y le pasa como parametro el valor resultado
                   
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
        db.Resena.findOne ({ //busca la reseña que coincida con los atributos indicados en el objeto
        where: [{id: req.params.id }] //donde el id sea igual al id pasado en el params
         })
        .then (resultado => {
        //return res.send (resultado);
            res.render ('editReview', {resultado: resultado} ) //renderiza la vista de edit review, va por get
        })
        },
        
        confirmEdit: function (req,res) {
        login.validar  (req.body.email, req.body.psw) //hay que validar el email y password, va por post
        .then (resultado => {
        if (resultado !=undefined) {
        db.Resena.update ({ //usa el metodo update para editar registros de la DB, recibe primero el campo que queremos editar
        textoResena: req.body.resena, //pasa la columna y lo que estaba escrito en el formulario
        puntaje: req.body.ranking 
        },
        {
        where: {
        id: req.params.id, //segundo parametro que indica de manera unica a que registro aplicar el cambio
        }
        })
        .then(() => {
        res.redirect ('/login/reviews/' + resultado.id ); //redirecciona a las reviews de ese usuario, con las reviews updateadas
        })
        } else {
        //return res.send ('Tenes mal los datos de acceso')
        return res.redirect ('/login/reviews/edit/' + req.params.id); //si es undefined redirige al edit 
        }
        });
        },
        
        deleteReview:  function (req,res) {
        res.render ('loginForReviewDelete', {deleteId: req.params.id }); //renderiza la vista de delete review, viaja por get
        },
        
        confirmDelete: function (req,res) {
        login.validar (req.body.email, req.body.psw) //valida el mail y password, viaja por post
        .then (resultado => {
        if (resultado !=null) { 
        db.Resena.destroy ({ //usa el metodo destroy que se le pasa un parametro, una condicion que aclara que registro eliminar
        where: {
        id: req.params.id, 
        }
        })
        res.redirect ('/login/reviews/' + resultado.id); //redirige a la vista re reviews de ese usuario updateado
        } else {
        res.redirect ('/login/reviews/delete/' + req.params.id); //si es nulo redirige a la vista de eliminar reviews
        }
        })
        }
        
        

};
module.exports = controlador