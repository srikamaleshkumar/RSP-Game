const user = document.querySelectorAll(".value");
const colour = document.querySelector(".board");
const result = document.querySelector(".result");

let computerpoints = 0;
let userspoints = 0;
const compoint = document.querySelector(".computerscore");
const userpoint = document.querySelector(".userscore");
user.forEach((user) => {
  user.addEventListener("click", () => {
    userchoice = user.getAttribute("id");
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  const computerchoice = compchoice();
  if (userchoice === computerchoice) {
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? true : false;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissor" ? false : true;
    } else {
      userwin = computerchoice === "paper" ? true : false;
    }
    scoreboard(userwin);
  }
};
const compchoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
};
const scoreboard = (userwin) => {
  if (userwin) {
    userspoints++;
    result.innerHTML = "You Won !";
    colour.style.backgroundColor = "green";
    userpoint.innerHTML = userspoints;
  } else {
    computerpoints++;
    result.innerHTML = "You Lose !";
    colour.style.backgroundColor = "red";
    compoint.innerHTML = computerpoints;
  }
};

const draw = () => {
  result.innerHTML = "Draw";
  colour.style.backgroundColor = "black";
};
