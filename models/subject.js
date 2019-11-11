module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("Subjects", {
    subject_name: DataTypes.STRING
  });
  Subjects.create({ subject_name: 'BIOL-Biology' })
  .then(function() {});
  Subjects.create({ subject_name: 'COMM-Communications' })
  .then(function() {});
  Subjects.create({ subject_name: 'ENGL-English' })
  .then(function() {});


  Subjects.associate = function(models) {
    Subjects.hasMany(models.AllData, {});
    Subjects.hasMany(models.Classes, {});
  };

  return Subjects;
  
};