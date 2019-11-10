// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");
// ====================================================
// ROUTES
// ====================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Subject.findAll({}).then(function(result) {
      var subjectObj = {
        subject: result
      };
      res.render("index", subjectObj);
    }).catch(function(err){
      //changed syntax from res.json(400, err) cause was getting an error
      res.status(400).json(err);
    });
  });
  // ====================================================
  app.post("/api/classes", function(req, res){
    db.Class.create({
      class_name: req.body.class_name
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