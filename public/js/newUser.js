$("#create-user").on("click", function(event) {
  event.preventDefault();
  let fname = $("#firstName").val();
  let lname = $("#lastName").val();
  let email = $("#email").val();
  let username = $("#username").val();
  let password = $("#password").val();
  let confirmPassword = $("#confirm-password").val();

  if (password === confirmPassword) {
    let newUser = {
      firstName: fname,
      lastName: lname,
      email: email,
      username: username,
      password: password
    };
    $.post("/api/new-user", newUser).then(res => {
      console.log(res);
      if (res.error) {
        alert(res.error);
      } else {
        // Account created! redirect to game page with new user logged in.
        window.location +=
          "play-game/" + res.newUser.username + "/" + res.newUser.playerID;
      }
    });
  } else {
    alert("Passwords do not match!");
  }
});
