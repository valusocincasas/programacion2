let db = require('../database/models')

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            
            return res.send(usuario); 
        })
    },

    buscarPorEmail: function (email){
        return db.usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.usuarios.findOne({
            where:{
                email:email,
                password: pass
            },
        })
        .then(results=>{
            console.log(results)
            return results;
        })
    }
}


module.exports = moduloLogin;