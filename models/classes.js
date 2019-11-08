module.exports = function(sequelize, DataTypes) {
    let Class = sequelize.define("class", {
    classID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    subID: {
        type: DataTypes.INTEGER
    },
    classname:{
        type: DataTypes.STRING
    }

    });
    return Subject;
};