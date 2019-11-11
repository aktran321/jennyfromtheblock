module.exports = function(sequelize, DataTypes) {
  
  var Subjects = sequelize.define("Subjects", {
    
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

  return Subjects;
};
