const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      /* defaultValue: UUIDV1 */
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    flags: {
      type: DataTypes.STRING,  // Posible Array
      allowNull: true
    },

    continents: {
      type: DataTypes.STRING,    // Posible Array
      allowNull: true
    },

    capital: {
      type: DataTypes.STRING, // Posible Array
      allowNull: true
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },

    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    fifa: {
      type: DataTypes.STRING,
      allowNull: true
    },

    maps: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
};
