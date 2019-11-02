var db = require("../models");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.render("sign-up");
  });
  app.get("/sign-in", function(req, res) {
    res.render("sign-in");
  });
  app.get("/leaderboards", function(req, res) {
    res.render("leaderboards");
  });
  // Load game with no user data
  app.get("/play-game", function(req, res) {
    res.render("play-game");
  });

  // Load game with user data
  app.get("/play-game/:username/:playerID", function(req, res) {
    db.UserData.findOne({
      where: { username: req.params.username, playerID: req.params.playerID }
    }).then(function(dbUserData) {
      res.render("play-game-user", {
        user: dbUserData
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
