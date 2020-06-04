const modulo = require('./modulo-loginController');

const controlador = {
    login: (req,res) =>{
        res.render ('modulo-login')
    },
    processLogin: (req, res) => {

        modulo.buscarPorEmail(req.body.email)
        .then(usuario => {
           if(usuario){
            // verificar sus datos
            //res.send(usuario)
            modulo.validar(req.body.email, req.body.psw)
            .then(usuario2 => {
               // res.send(usuario2)
                if(usuario2){
                    // cuando es todo correcto
                    res.redirect('/home')
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
    logUser: function (req,res) {
    res.render ('modulo-login')
    },
    confirmUser: function (req,res) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado => {
        if (resultado ==undefined) {
        res.redirect ('/users/reviews?problema= no se encontro usuario'); } //redirecciona de nuevo al login
        else {
        res.redirect ('/users/reviews/' + resultado.id) }
        })
        }, 
        //el login en la vista en el form, tiene como action: '/users/reviews' y metodo post (formato de logeo para ver resenias)
        
        getReviews: function (req,res) {
        db.resenas.findAll ({
        where: [{usuarioId: req.params.id }], 
        include: ['usuarios']
         })
        .then (resultado => {
        res.render ('reviews', {resultado} )
        })
        },
        
        showEdit: function (req,res) {
        db.Resena.findOne ({
        where: [{Id: req.params.id }]
         })
        .then (resultado => {
        res.render ('editReview', {resultado} )
        })
        },
        
        confirmEdit: function (req,res) {
        moduloLogin.validar  (req.body.email, req.body.password)
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
        res.redirect ('/users/reviews/' + resultado.id );
        })
        } else {
        return res.send ('Tenes mal los datos de acceso')
        return res.redirect ('/users/reviews/edit/' + req.params.id);
        }
        });
        },
        
        deleteReview:  function (req,res) {
        res.render ('loginForReviewDelete', {deleteId: req.params.id });
        },
        
        confirmDelete: function (req,res) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado => {
        if (resultado !=null) {
        db.resena.destroy ({
        where: {
        id: req.params.id, 
        }
        })
        res.redirect ('/users/reviews/' + resultado.id);
        } else {
        res.redirect ('//users/reviews/delete/' + req.params.id);
        }
        })
        }
        
        

};
module.exports = controlador