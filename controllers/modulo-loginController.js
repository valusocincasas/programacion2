let db = require('../database/models');
let bcrypt =require('bcryptjs');

let moduloLogin = {
    chequearUsuario: function (email) { //chequearUsuario → email como parámetro y retorna true si está registrado en la base de datos con ese email   
        return db.usuarios.findOne({ //busca un usuario con el email que coincida en la DB
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            
            return res.send(usuario);  //devuelve el usuario con ese email
        })
    },

    buscarPorEmail: function (email){
        return db.usuarios.findOne({ //busca el usuario que tiene ese email
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado //devuelve un objeto literal con todos los datos del usuario 
        })
    },

    validar: function (email, pass) { //dos parametros
        return db.usuarios.findOne({ //busca en la DB el usuario con ese mail y esa contraseña
            where:{
                email:email,
        
            },
        })
        .then(results=>{
           if (results && bcrypt.compareSync(pass, results.password)) { //si el mail coincide con el de la DB, compara un texto plano con el mail hasheado para ver si coinciden
            //pass viene del validar y results.password viene del then
               return results 
           } else {
               return null 
           }
        })
    }
}


module.exports = moduloLogin;