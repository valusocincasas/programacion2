module.exports = function (sequelize, DataTypes) {
const Resena = sequelize.define (
    'Resena',
    { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        peliculaId: DataTypes.INTEGER,
        usuarioId: DataTypes.INTEGER,
        textoResena: DataTypes.STRING,
        puntaje: DataTypes.INTEGER,
    }, 
    {
        tableName: "resenas"
    }
)
Resena.associate = function (models) {
    Resena.belongsTo (models.usuarios, {
        as: 'usuario', 
    foreignKey: 'usuarioId'
    })
}
return Resena
 }
