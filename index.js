document.getElementById("startButton").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  window.location.href = "game.html?username=" + encodeURIComponent(username);
});
