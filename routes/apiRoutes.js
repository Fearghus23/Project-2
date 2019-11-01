var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new user
  app.post("/api/new-user", function(req, res) {
    // try {
    console.log("we are in new user route");
    db.UserData.create(req.body)
      .then(function(newUser) {
        console.log("we are in");
        res.json(newUser);
      })
      .catch(function(err) {
        console.log("error in auth is: ", err);
        res.json({ error: err.errors[0].message });
      });
    // } catch (error) {
    //   console.log(error);
    //   res.send("Username taken!");
    // }
  });
};
