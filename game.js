/*---------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------/  Map code  \---------------------------------------------- */
/*---------------------------------------------------------------------------------------------------------*/
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const usernameText = document.querySelector("#usernameText");

if (username != "") {
  usernameText.textContent = username;
}

const player = document.querySelector("#player");
const LDoor = document.querySelector("#leftDoor");
const RDoor = document.querySelector("#rightDoor");
const closet = document.querySelector("#closet");
const bed = document.querySelector("#bed");
const base = document.querySelector("#base");
const leftFlashButton = document.querySelector("#leftFlashButton");
const rightFlashButton = document.querySelector("#rightFlashButton");
const leftShockButton = document.querySelector("#leftShockButton");
const rightShockButton = document.querySelector("#rightShockButton");
const leftHallway = document.querySelector("#leftHallway");
const rightHallway = document.querySelector("#rightHallway");

const flashOnLeftSfx = document.querySelector("#flashOnLeft");
flashOnLeftSfx.volume = 0.5;
const flashOffLeftSfx = document.querySelector("#flashOffLeft");
flashOffLeftSfx.volume = 0.5;
let leftFlash = false;
const flashOnRightSfx = document.querySelector("#flashOnRight");
flashOnRightSfx.volume = 0.5;
const flashOffRightSfx = document.querySelector("#flashOffRight");
flashOffRightSfx.volume = 0.5;
let rightFlash = false;

const leftShockSfx = document.querySelector("#leftShockSfx");
const rightShockSfx = document.querySelector("#rightShockSfx");

const farScare = document.querySelector("#farScare");
const closeScare = document.querySelector("#closeScare");

const ambienceSong = document.querySelector("#ambienceSong");
ambienceSong.volume = 0.05;
window.addEventListener("load", () => {
  ambienceSong.play();
});
let plrLocation = "base";
let moving = false;

function gotoLDoor() {
  if (plrLocation == "base" && moving == false) {
    moving = true;
    setTimeout(() => {
      moving = false;
      leftFlashButton.style.visibility = "visible";
      leftShockButton.style.visibility = "visible";
    }, 2300);
    player.style.transform = "translateX(-175px)";
    player.style.transition = "transform 2.5s ease-out";
    LDoor.style.visibility = "hidden";
    base.style.visibility = "visible";
    plrLocation = "LDoor";
  }
}
function gotoRDoor() {
  if (plrLocation == "base" && moving == false) {
    moving = true;
    setTimeout(() => {
      moving = false;
      rightFlashButton.style.visibility = "visible";
      rightShockButton.style.visibility = "visible";
    }, 2300);
    player.style.transform = "translateX(175px)";
    player.style.transition = "transform 2.5s ease-out";
    RDoor.style.visibility = "hidden";
    base.style.visibility = "visible";
    plrLocation = "RDoor";
  }
}
function gotoCloset() {
  if (plrLocation == "base" && moving == false) {
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 1800);
    player.style.transform = "translateY(-60px)";
    player.style.transition = "transform 2s ease-out";
    closet.style.visibility = "hidden";
    base.style.visibility = "visible";
    plrLocation = "closet";
  }
}
function gotoBed() {
  if (plrLocation == "base" && moving == false) {
    setTimeout(() => {
      moving = false;
    }, 1800);
    player.style.transform = "translateY(70px)";
    player.style.transition = "transform 2s ease-out";
    bed.style.visibility = "hidden";
    base.style.visibility = "visible";
    plrLocation = "bed";
    moving = true;
  }
}
function gotoBase() {
  if (plrLocation != "base" && moving == false) {
    if (plrLocation == "LDoor" || plrLocation == "RDoor") {
      player.style.transition = "transform 2s ease-out";
      setTimeout(() => {
        plrLocation = "base";
      }, 1800);
    } else {
      player.style.transition = "transform 1.5s ease-out";
      setTimeout(() => {
        plrLocation = "base";
      }, 1300);
    }
    player.style.transform = "translate(0px)";

    leftFlashButton.style.visibility = "hidden";
    leftShockButton.style.visibility = "hidden";
    rightFlashButton.style.visibility = "hidden";
    rightShockButton.style.visibility = "hidden";
    base.style.visibility = "hidden";
    LDoor.style.visibility = "visible";
    closet.style.visibility = "visible";
    RDoor.style.visibility = "visible";
    bed.style.visibility = "visible";
  }
}

leftFlashButton.addEventListener("mousedown", function () {
  leftHoldTimeout = setTimeout(function () {
    leftHallway.style.backgroundColor = "#f4f4f4";
    flashOnLeftSfx.play();
    leftFlash = true;
    switch (bonnie.stage) {
      case 1:
        bonnieDiv.style.visibility = "visible";
        bonnieDiv.style.transform = "translate(85px, -50px)";
        bonnieDiv.style.transition = "transform 0.5s ease-out";
        setTimeout(() => {
          bonnieDiv.style.visibility = "hidden";
          bonnieDiv.style.transform = "translate(0px, 0px)";
          bonnie.stage = 0;
        }, 500);
        closeScare.play();
        break;

      case 2:
        bonnieDiv.style.removeProperty("transition");
        bonnieDiv.style.transform = "translate(0px, 225px)";
        bonnieDiv.style.visibility = "visible";
        attackTimeout = setTimeout(() => {
          gameOver("bonnie");
        }, 3000);
        farScare.play();
        break;
      case 3:
        bonnieDiv.style.removeProperty("transition");
        bonnieDiv.style.transform = "translate(60px, 245px)";
        bonnieDiv.style.visibility = "visible";
        attackTimeout = setTimeout(() => {
          gameOver("bonnie");
        }, 1500);
        farScare.play();
        break;
    }
  }, 0);
});

leftFlashButton.addEventListener("mouseup", function () {
  clearTimeout(leftHoldTimeout);
  leftHallway.style.backgroundColor = "#202020";
  if (leftFlash) {
    flashOffLeftSfx.play();
    leftFlash = false;
  }
  bonnieDiv.style.visibility = "hidden";
});

leftFlashButton.addEventListener("mouseleave", function () {
  clearTimeout(leftHoldTimeout);
  leftHallway.style.backgroundColor = "#202020";
  if (leftFlash) {
    flashOffLeftSfx.play();
    leftFlash = false;
    bonnieDiv.style.visibility = "hidden";
  }
});

rightFlashButton.addEventListener("mousedown", function () {
  rightHoldTimeout = setTimeout(function () {
    rightHallway.style.backgroundColor = "#f4f4f4";
    flashOnRightSfx.play();
    rightFlash = true;
    switch (chica.stage) {
      case 1:
        closeScare.play();
        chicaDiv.style.visibility = "visible";
        chicaDiv.style.transform = "translate(-85px, -50px)";
        chicaDiv.style.transition = "transform 0.5s ease-out";
        setTimeout(() => {
          chicaDiv.style.visibility = "hidden";
          chicaDiv.style.transform = "translate(0px, 0px)";
          chica.stage = 0;
        }, 500);
        break;

      case 2:
        chicaDiv.style.removeProperty("transition");
        chicaDiv.style.transform = "translate(0px, 225px)";
        chicaDiv.style.visibility = "visible";
        attackTimeout = setTimeout(() => {
          gameOver("chica");
        }, 3000);
        farScare.play();
        break;
      case 3:
        chicaDiv.style.removeProperty("transition");
        chicaDiv.style.transform = "translate(-60px, 250px)";
        chicaDiv.style.visibility = "visible";
        attackTimeout = setTimeout(() => {
          gameOver("chica");
        }, 1500);
        farScare.play();
        break;
    }
  }, 0);
});

rightFlashButton.addEventListener("mouseup", function () {
  clearTimeout(rightHoldTimeout);
  rightHallway.style.backgroundColor = "#202020";
  if (rightFlash) {
    flashOffRightSfx.play();
    rightFlash = false;
    chicaDiv.style.visibility = "hidden";
  }
});

rightFlashButton.addEventListener("mouseleave", function () {
  clearTimeout(rightHoldTimeout);
  rightHallway.style.backgroundColor = "#202020";
  if (rightFlash) {
    flashOffRightSfx.play();
    rightFlash = false;
    chicaDiv.style.visibility = "hidden";
  }
});

let rightShocked = false;
rightShockButton.addEventListener("click", function () {
  if (!rightShocked) {
    rightShocked = true;
    rightHallway.style.backgroundColor = "#fff";
    rightShockSfx.play();
    setTimeout(() => {
      rightHallway.style.backgroundColor = "#202020";
    }, 250);
    setTimeout(() => {
      rightShocked = false;
    }, 1500);
    if (chica.stage == 2 || chica.stage == 3) {
      chicaDiv.style.removeProperty("transition");
      chicaDiv.style.visibility = "visible";
      chicaDiv.style.transition = "transform 0.5s ease-out";
      setTimeout(() => {
        chicaDiv.style.visibility = "hidden";
      }, 250);
      if (typeof attackTimeout !== "undefined") {
        clearTimeout(attackTimeout);
      }
      chica.stage = 0;
      chicaDiv.style.transform = "translate(0px, 0px)";
    } else {
      gameOver("chicaShock");
    }
  }
});

let leftShocked = false;
leftShockButton.addEventListener("click", function () {
  if (!leftShocked) {
    leftShocked = true;
    leftHallway.style.backgroundColor = "#fff";
    leftShockSfx.play();
    setTimeout(() => {
      leftHallway.style.backgroundColor = "#202020";
    }, 250);
    setTimeout(() => {
      leftShocked = false;
    }, 1500);

    if (bonnie.stage == 2 || bonnie.stage == 3) {
      bonnieDiv.style.removeProperty("transition");
      bonnieDiv.style.visibility = "visible";
      bonnieDiv.style.transition = "transform 0.5s ease-out";
      setTimeout(() => {
        bonnieDiv.style.visibility = "hidden";
      }, 250);
      bonnie.stage = 0;
      bonnieDiv.style.transform = "translate(0px, 0px)";
      if (typeof attackTimeout !== "undefined") {
        clearTimeout(attackTimeout);
      }
    } else {
      gameOver("bonnieShock");
    }
  }
});

/*---------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------/  Timer code  \-------------------------------------------- */
/*---------------------------------------------------------------------------------------------------------*/

const timerText = document.querySelector("#timer");
setTimeout(() => {
  timerText.textContent = "1 AM";
  chica.aiLevel += 1;
  bonnie.aiLevel += 1;
}, 45000);
setTimeout(() => {
  timerText.textContent = "2 AM";
  chica.aiLevel += 1;
  bonnie.aiLevel += 2;
}, 90000);
setTimeout(() => {
  timerText.textContent = "3 AM";
}, 135000);
setTimeout(() => {
  timerText.textContent = "4 AM";
}, 180000);
setTimeout(() => {
  timerText.textContent = "5 AM";
  chica.aiLevel += 2;
  bonnie.aiLevel += 2;
}, 225000);
setTimeout(() => {
  timerText.textContent = "6 AM";
  gameOver("win");
}, 270000);

/*---------------------------------------------------------------------------------------------------------*/
/*----------------------------------------/  Animatronics code  \----------------------------------------- */
/*---------------------------------------------------------------------------------------------------------*/

class Animatronic {
  constructor(name, aiLVL, stage) {
    this.name = name;
    this.aiLevel = aiLVL;
    this.stage = stage;
  }
}

const bonnie = new Animatronic("Bonnie", 2, 0);
const bonnieDiv = document.querySelector("#bonnie");

const chica = new Animatronic("Chica", 1, 0);
const chicaDiv = document.querySelector("#chica");

//Bonnie code lines:
setInterval(() => {
  const randomX = Math.floor(Math.random() * 20 + 1);
  if (randomX <= bonnie.aiLevel) {
    if (!leftFlash) {
      bonnie.stage += 1;
    }
    switch (bonnie.stage) {
      case 2:
        bonnieDiv.style.transform = "translate(0px, 225px)";
        break;
      case 3:
        bonnieDiv.style.transform = "translate(-60px, 250px)";
        break;
      case 4:
        gameOver("bonnieTime");
        break;
    }
  }
  console.log("bonnie: " + bonnie.stage);
}, 5000);

//Chica code lines:
setInterval(() => {
  const randomX = Math.floor(Math.random() * 20 + 1);
  if (randomX <= chica.aiLevel) {
    if (!rightFlash) {
      chica.stage += 1;
    }
    switch (chica.stage) {
      case 2:
        chicaDiv.style.transform = "translate(0px, 225px)";
        break;
      case 3:
        chicaDiv.style.transform = "translate(-60px, 250px)";
        break;
      case 4:
        gameOver("chicaTime");
        break;
    }
  }
  console.log("chica: " + chica.stage);
}, 5000);

const causeText = document.querySelector("#causeText");

function gameOver(cause) {
  if (cause == "chicaShock" || cause == "bonnieShock") {
    setTimeout(() => {
      window.location.href =
        "gameOver.html?cause=" +
        encodeURIComponent(cause) +
        "&username=" +
        encodeURIComponent(username);
    }, 500);
  } else {
    setTimeout(() => {
      window.location.href =
        "gameOver.html?cause=" +
        encodeURIComponent(cause) +
        "&username=" +
        encodeURIComponent(username);
    }, 0);
  }
}
