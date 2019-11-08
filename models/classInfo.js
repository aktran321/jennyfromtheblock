module.exports = function(sequelize, DataTypes) {
    let ClassInfo = sequelize.define("classInfo", {
    classTimeID:{
        type:DataTypes.Time,
        allowNull: false,
    },
    classID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    day:{
        type: DataTypes.STRING,
        allowNull:false
    },
    startTime:{
        type: DataTypes.TIME,
        allowNull:false,
    }

    });
    return ClassInfo;
};