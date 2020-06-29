const DB = require('../database/models'); //se debe requerir el objeto DB

module.exports = {
	index: function (req, res) {
		DB 
			.sequelize //para usarlo requerimos el objeto DB y por ende a sequelize
			.query('SELECT * FROM resenas') //consulta SQL para manipular la base de datos
			.then(function (resultados) { //definimos que hacer con la informacion 
				return res.render('resenas', { //renderiza la vista de reseñas
					listadoUsuarios: resultados[0] 
				});
			})
			.catch(function (errors) {
				return res.send(errors);
			});
	}
}; 
