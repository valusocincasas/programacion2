module.exports = function (sequelize, dataTypes) {
  
let usuarios = sequelize.define ("usuarios", {/*id: dataTypes.INTEGER,*/ 
    nombreCompleto: dataTypes.STRING, 
    email: dataTypes.STRING, 
    password: dataTypes.STRING,
fechaNacimiento:dataTypes.DATE  }, 
 { timestamps: false} 

);
usuarios.associate = function (models) { //associate
    usuarios.hasMany (models.Resena, { //hasMany por que un usuario tiene muchas reseñas
        as: 'Resena', //alias de la relacion
    foreignKey: 'usuarioId' //foreign key que relaciona las dos tablas
    })
}
return usuarios; 

}