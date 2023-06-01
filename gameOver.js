const urlParams = new URLSearchParams(window.location.search);
const cause = urlParams.get("cause");
const username = urlParams.get("username");
const causeText = document.querySelector("#causeText");
const tryAgainText = document.querySelector("#tryAgainText");
const defeatSfx = document.querySelector("#defeat");
const victorySfx = document.querySelector("#victory");
const image = document.querySelector("img");

if (username != "") {
  tryAgainText.textContent = "Try again, " + username + "?";
}
switch (cause) {
  case "chica":
    causeText.textContent = "When you see her, shock her";
    defeatSfx.play();
    image.src = "images/chica.jpg";
    break;
  case "bonnie":
    causeText.textContent = "Next time do yourself a favor and shock him";
    defeatSfx.play();
    image.src = "images/bonnie.jpg";
    break;
  case "bonnieShock":
    causeText.textContent = "He will get you if you shock at the wrong time.";
    defeatSfx.play();
    image.src = "images/bonnie.jpg";
    break;
  case "chicaShock":
    causeText.textContent = "I don't think you should shock for no reason, no?";
    defeatSfx.play();
    image.src = "images/chica.jpg";
    break;
  case "chicaTime":
    causeText.textContent =
      "Should have paid some attention to the right hallway!";
    defeatSfx.play();
    image.src = "images/chica.jpg";
    break;
  case "bonnieTime":
    causeText.textContent = "Keep a look at the left hallway next time.";
    defeatSfx.play();
    image.src = "images/bonnie.jpg";
    break;
  case "win":
    causeText.textContent = "Congrats! you survived till 6 AM.";
    victorySfx.play();
    image.src = "images/ballons.jpg";
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
