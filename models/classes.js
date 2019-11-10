module.exports = function(sequelize, DataTypes) {
    //*** Keep in mind Class and class ...
    //we had db.Class.findAll in the controllers file and it took forever 
    //to find the problem. Best practice to capitalize both "Class" and "class" here
    //but I'll leave it as "class" for now
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
    },
    selected: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false,
        allowNull: false
      }
    });
    return Class;
};