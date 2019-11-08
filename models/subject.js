module.exports = function(sequelize, DataTypes) {
  
  let Subject = sequelize.define("subject", {
    
    subID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subjectname: {
      type: DataTypes.STRING
    }
    
  });
  return Subject;
};
