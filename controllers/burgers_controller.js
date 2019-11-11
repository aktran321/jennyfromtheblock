// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");
// ====================================================
// ROUTES
// ====================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Subjects.findAll({}).then(function(result) {
      var subjectObj = {
        subjects: result
      };
      res.render("index", subjectObj);
    }).catch(function(err){
      //changed syntax from res.json(400, err) cause was getting an error
      res.status(400).json(err);
    });
  });
  // ====================================================
  app.post("/api/subjects", function(req, res){
    db.Subjects.create({
      subject_name: req.body.subject_name
    }).then(function(result){
      res.json(result);
    }).catch(function(err){
      res.json(400, err);
    });
  });
  // ====================================================
  app.put("/api/classes/:id", function(req, res) {
    console.log(req.body.selected);
    db.Class.update({
      selected: req.body.selected
    }, { 
      where: { id: req.params.id }
    }).then(function(result){
      res.json(result);
    }).catch(function(err){
      res.json(400, err);
    });
  });
  // ====================================================
  app.delete("/api/classes/:id", function(req, res) {
    db.Class.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result){
        res.json(result);
    }).catch(function(err){
      res.json(400, err);
    });
  });
};
// ====================================================