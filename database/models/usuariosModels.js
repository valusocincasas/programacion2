module.exports = function (sequelize, dataTypes) {
   /* let alias= "Usuarios";
    let cols = {
        id: { 
            type: dataTypes.INTEGER, 
            PrimaryKey: true, 
            autoIncrement: true 

        },
        nombreCompleto: {
            type: dataTypes.VARCHAR (255)
        },
        email: {
            type: dataTypes.VARCHAR (255)
        },
        password: {
            type: dataTypes.VARCHAR (255)
        },
        fechaNacimiento: {
            type: dataTypes.datetime  
        }
    }
    let config= {
    timestamps: false
    }
} */
let usuarios = sequelize.define ("usuarios", {/*id: dataTypes.INTEGER,*/ 
    nombreCompleto: dataTypes.STRING, 
    email: dataTypes.STRING, 
    password: dataTypes.STRING,
fechaNacimiento:dataTypes.DATE  }, 
 { timestamps: false} 

);

return usuarios; 

}