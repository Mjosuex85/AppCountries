const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('activities', {
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

