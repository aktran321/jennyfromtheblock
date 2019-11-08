module.exports = function(sequelize, DataTypes) {
  
  let Subject = sequelize.define("subject", {
    
    subject_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull:false
    }    
  });

  return Subject;
};
