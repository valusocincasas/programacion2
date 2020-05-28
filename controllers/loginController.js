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
            modulo.validar(usuario.email, usuario.password)
            .then(usuario => {
                if(usuario){
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