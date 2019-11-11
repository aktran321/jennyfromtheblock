module.exports = function(sequelize, DataTypes) {
    var Classes = sequelize.define("Classes", {
    class_name: DataTypes.STRING
    });

    Classes.create({ class_name: 'Human Biology' })
    .then(function() {});
    Classes.create({ class_name: 'Intro to Ecology and Evolution' })
    .then(function() {});
    Classes.create({ class_name: 'The Research Process' })
    .then(function() {});
    Classes.create({ class_name: 'Nutrition and Metabolism' })
    .then(function() {});
    Classes.create({ class_name: 'History of Biology' })
    .then(function() {});
    Classes.create({ class_name: 'Public Speaking' })
    .then(function() {});
    Classes.create({ class_name: 'Communication Research Methods' })
    .then(function() {});
    Classes.create({ class_name: 'Sports and The Digital' })
    .then(function() {});
    Classes.create({ class_name: 'Seminar in DIgital Rhetoric' })
    .then(function() {});
    Classes.create({ class_name: 'Small Group Communication' })
    .then(function() {});
    Classes.create({ class_name: 'Art of Literature' })
    .then(function() {});
    Classes.create({ class_name: 'Global Issues in Literature' })
    .then(function() {});
    Classes.create({ class_name: 'Intro to Creative Writing' })
    .then(function() {});
    Classes.create({ class_name: 'News Journalism' })
    .then(function() {});
    Classes.create({ class_name: 'Meth of Adv Literary Studies' })
    .then(function() {});

    Classes.associate = function(models) {
    Classes.hasMany(models.AllData, {})
    Classes.belongsTo(models.Subjects, { 
        foreignKey: "SubjectId"
    })
    };

    return Classes;
};