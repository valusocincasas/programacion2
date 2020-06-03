const DB = require('../database/models');
const login = require('./modulo-loginController');
const OP = DB.Sequelize.Op;
let bcrypt =require('bcryptjs');



module.exports = {
	index: function (req, res) {
		DB
			.sequelize
			.query('SELECT * FROM usuarios')
			.then(function (resultados) {
				return res.render('usuariosForm', {
					listadoUsuarios: resultados[0]
				});
			})
			

			.catch(function (errors) {
				return res.send(errors);
			});
	},

	store: function (req,res) {
		DB.usuarios.create ({
	nombreCompleto: req.body.user, 
	email: req.body.email, 
	password: bcrypt.hashSync(req.body.password,10),
	fechaNacimiento: req.body.birthDate
	
		});
		res.redirect ("/home")
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

