const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('weather', {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            defaultValue: UUIDV4
          },

        temp: {
          type: DataTypes.INTEGER,
          unique: true
        },

        feels_like: {   
            type: DataTypes.INTEGER,
            allowNull: false
        },

        temp_min: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        speed: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },

        humidity: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },

        humidity: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },

        humidity: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },

        humidity: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },

        
    });
};