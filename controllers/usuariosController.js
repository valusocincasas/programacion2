const DB = require('../database/models');

module.exports = {
	index: function (req, res) {
		DB
			.sequelize
			.query('SELECT * FROM usuarios')
			.then(function (resultados) {
				return res.render('usuarios', {
					listadoUsuarios: resultados[0]
				});
			})
			.catch(function (errors) {
				return res.send(errors);
			});
	}
};

