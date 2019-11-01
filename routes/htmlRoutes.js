var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("sign-up");
  });
  app.get("/sign-in", function(req, res) {
    res.render("sign-in");
  });
  app.get("/leaderboards", function(req, res) {
    res.render("leaderboards");
  });
  app.get("/play-game", function(req, res) {
    res.render("play-game");
  });

  // Load example page and pass in an example by id
  app.get("/:username/:playerID", function(req, res) {
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
