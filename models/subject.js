module.exports = function(sequelize, DataTypes) {
  
  let Subject = sequelize.define("Subject", {
    
    // subject_ID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    subject_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    inSchedule: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false,
      allowNull: false
    }
        
  });
Subject.associate = function(models){
  Subject.hasMany(models.Class,{as: Class, foreignKey: "subject_ID"})
}
  return Subject;
};