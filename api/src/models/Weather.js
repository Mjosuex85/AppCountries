const { DataTypes, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('weather', {

        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            defaultValue: UUIDV4
          },

        name: {
          type: DataTypes.STRING,
          unique: true
        },

        difficulty: {   
            type: DataTypes.INTEGER,
            allowNull: false
        },

        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        season: {
            type: DataTypes.STRING,  // debería ser un array
            allowNull: false
        },
        
    });
};