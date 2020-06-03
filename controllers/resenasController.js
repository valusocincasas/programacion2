const DB = require('../database/models');

module.exports = {
	index: function (req, res) {
		DB
			.sequelize
			.query('SELECT * FROM resenas')
			.then(function (resultados) {
				return res.render('resenas', {
					listadoUsuarios: resultados[0]
				});
			})
			.catch(function (errors) {
				return res.send(errors);
			});
	}
}; 
