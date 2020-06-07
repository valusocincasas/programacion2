module.exports = function (sequelize, dataTypes) {
  
let usuarios = sequelize.define ("usuarios", {/*id: dataTypes.INTEGER,*/ 
    nombreCompleto: dataTypes.STRING, 
    email: dataTypes.STRING, 
    password: dataTypes.STRING,
fechaNacimiento:dataTypes.DATE  }, 
 { timestamps: false} 

);

return usuarios; 

}