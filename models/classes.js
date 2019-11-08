module.exports = function(sequelize, DataTypes) {
    let Class = sequelize.define("class", {
    class_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    subject_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    class_name:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    });
    return Class;
};