module.exports = function (sequelize, DataTypes) {//recibe dos parametros, un objeto sequelize para acceder a define y DataTypes 
const Resena = sequelize.define ( //define recibe tres parametros
    'Resena', //identifica al modelo, es un alias
    { 
        id: { //identifica los tipos de datos de cada columna en la base de datos
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        peliculaId: DataTypes.INTEGER,
        usuarioId: DataTypes.INTEGER,
        textoResena: DataTypes.STRING,
        puntaje: DataTypes.INTEGER,
    }, 
    { //objeto adicional con configuraciones adicionales (en la DB se llama resenas)
        tableName: "resenas"
       
    }
)
Resena.associate = function (models) { //establecer relaciones con la propiedad associate, recibe un unico parametro models
    Resena.belongsTo (models.usuarios, { //belongsTo por que una reseña pertenece a un usuario
        as: 'usuarios', //alias para la relacion 
    foreignKey: 'usuarioId' //la foreign key donde se relacionan esas dos tablas
    })
}
return Resena
 }
