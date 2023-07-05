const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
});

const Cancion = sequelize.define('Cancion', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Cancion.belongsTo(Genero, { foreignKey: 'generoId' });
Genero.hasMany(Cancion, { foreignKey: 'generoId' });
