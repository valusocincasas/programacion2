const DB = require('../database/models'); //requerir el objeto DB y sequelize
const login = require('./modulo-loginController');
const OP = DB.Sequelize.Op;
let bcrypt =require('bcryptjs');



module.exports = {
	index: function (req, res) { //metodo index
		DB
			.sequelize
			.query('SELECT * FROM usuarios') //consulta SQL para manipular la base de datos
			.then(function (resultados) { //definis que hacer con la informacion
				return res.render('usuariosForm', { //renderiza la vista de registrarse
					listadoUsuarios: resultados[0] // retorna un array con dos posiciones, con los resultados en la primera posicion
				});
			})
			

			.catch(function (errors) {
				return res.send(errors);
			});
	},

	store: function (req,res) { //metodo store, viaja por post
		DB.usuarios.create ({ //metodo create para agregar nuevos registros a la DB, viaja por get
	nombreCompleto: req.body.user, //agregar a traves del formulario los datos que despues viajaran a la DB
	email: req.body.email, 
	password: bcrypt.hashSync(req.body.password,10), //hashSync para encriptar la contraseña (parametro a encriptar, "sal")
	fechaNacimiento: req.body.birthDate
	
		});
		res.redirect ("/home") //redirecciona al home
	},

	create: (req, res) => {
		DB.usuarios.create()
			.then(function (Usuarios) {
				console.log (Usuarios)
				return res.render('home', {
					listadoDeUsuarios: Usuarios,
				}); 
			})
			.catch(function (error) {
				return res.send(error);
			})
		
		
	},


}

