module.exports = function(sequelize, DataTypes) {
    let ClassInfo = sequelize.define("classInfo", {
    class_TimeID:{
        type:DataTypes.Time,
        allowNull: false,
    },
    class_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    day:{
        type: DataTypes.STRING,
        allowNull:false
    },
    start_Time:{
        type: DataTypes.TIME,
        allowNull:false,
    }

    });
    return ClassInfo;
};