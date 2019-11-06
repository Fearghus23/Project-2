var db = require("../models");
var randomstring = require("randomstring");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  app.get("/api/user-login", function(req, res) {
    db.UserData.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(data) {
      console.log(data);
      res.json(data);
      console.log({ username: data.dataValues.username });
      res.json({
        username: data.dataValues.username,
        playerID: data.dataValues.playerID
      });
    });
  });

  // Create a new user
  app.post("/api/new-user", function(req, res) {
    let ID = randomstring.generate({
      length: 14,
      charset: "alphanumeric"
    });
    const playerObj = req.body;
    playerObj.playerID = ID;
    db.UserData.create(playerObj)
      .then(function(newUser) {
        db.GameData.create({ UserDatumPlayerID: ID })
          .then(function(newGameData) {
            res.json({ newGameData, newUser });
          })
          .catch(function(err) {
            console.log("error in gameDataCreate: ", err);
          });
      })
      .catch(function(err) {
        console.log("error in auth is: ", err);
        res.json({ error: err.errors[0].message });
      });
  });
};
