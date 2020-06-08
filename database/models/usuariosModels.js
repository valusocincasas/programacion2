module.exports = function (sequelize, dataTypes) {
  
let usuarios = sequelize.define ("usuarios", {/*id: dataTypes.INTEGER,*/ 
    nombreCompleto: dataTypes.STRING, 
    email: dataTypes.STRING, 
    password: dataTypes.STRING,
fechaNacimiento:dataTypes.DATE  }, 
 { timestamps: false} 

);
usuarios.associate = function (models) {
    usuarios.hasMany (models.Resena, {
        as: 'Resena', 
    foreignKey: 'usuarioId'
    })
}
return usuarios; 

}