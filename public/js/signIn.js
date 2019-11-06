$("#signInButton").on("click", function(event) {
  event.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();

  if (username && password) {
    let userLogin = {
      username: username,
      password: password
    };
    console.log("login", userLogin);
    // this is a post to add user login to req.body
    $.post("/api/user-login", userLogin).then(function(res) {
      if (res.error) {
        alert(res.error);
      } else {
        console.log(res);
        window.localStorage.setItem("user", res.username);
        // Account created! redirect to game page with new user logged in.
        window.location = "/play-game/" + res.username + "/" + res.playerID;
      }
      console.log(res);
    });
  }
});
