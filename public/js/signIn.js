$("#signInButton").on("click", function(event) {
  event.preventDefault();
  let username = $("#username").val();
  let password = $("#password").val();

  if (username && password) {
    console.log("login");
  }
});
