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
    }
};
module.exports = controlador