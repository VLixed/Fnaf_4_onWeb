const urlParams = new URLSearchParams(window.location.search);
const cause = urlParams.get("cause");
const username = urlParams.get("username");
const causeText = document.querySelector("#causeText");
const tryAgainText = document.querySelector("#tryAgainText");

if (username != "") {
  tryAgainText.textContent = "Try again, " + username + "?";
}
switch (cause) {
  case "chica":
    causeText.textContent = "When you see her, shock her";
    break;
  case "bonnie":
    causeText.textContent = "Next time do yourself a favor and shock him";
    break;
  case "bonnieChock":
    causeText.textContent = "He will get you if you shock at the wrong time.";
    break;
  case "chicaShock":
    causeText.textContent = "I don't think you should shock for no reason, no?";
    break;
  case "chicaTime":
    causeText.textContent =
      "Should have paid some attention to the right hallway!";
    break;
  case "bonnieTime":
    causeText.textContent = "Keep a look at the left hallway next time.";
    break;
  case "win":
    break;
}

const retryButton = document.querySelector(".retryButton");
const quitButton = document.querySelector(".quitButton");

retryButton.addEventListener("click", () => {
  window.location.href = "game.html?username=" + decodeURIComponent(username);
});
quitButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
