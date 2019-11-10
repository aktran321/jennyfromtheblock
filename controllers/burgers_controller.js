// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");
// ====================================================
// ROUTES
// ====================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Class.findAll({}).then(function(result) {
      var classObj = {
        burgers: result
      };
      res.render("index", classObj);
    }).catch(function(err){
      res.json(400, err);
    });
  });
  // ====================================================
  app.post("/api/classes", function(req, res){
    db.Class.create({
      burger_name: req.body.burger_name
    }).then(function(result){
      res.json(result);
    }).catch(function(err){
      res.json(400, err);
    });
  });
  // ====================================================
  app.put("/api/classes/:id", function(req, res) {
    console.log(req.body.devoured);
    db.Class.update({
      devoured: req.body.devoured
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