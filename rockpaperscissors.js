let uScr = document.querySelector("#users");
let cScr = document.querySelector("#cmpns");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer");
let scrbg = document.querySelector(".scoreboard");
let movebg = document.querySelector(".move");

let uMv = document.querySelector("#umv");
let cMv = document.querySelector("#cmv");

let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".choice");

function cap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const compMove = () => {
    const op = ["rock", "paper", "scissors"];
    const opIndex =Math.floor(Math.random() * 3); // to generate number in the range of 0 - n ===> multiple number generated by random by n+1 (it generates numbers in the range 0 - 1 )
    // math.floor converts value to integer - removes numbers after decimal
    return op[opIndex];
}

const drawCond = () => {
    console.log("Game was DRAW!");
    msgcontainer.style.backgroundColor = "blanchedalmond";
    msg.style.color = "black";
    movebg.style.backgroundColor = "blanchedalmond";
    movebg.style.color = "black";
    msg.innerText = "Game was DRAW!";
}

const showWinner = (userWin, usch, cmch) => {
    if(userWin) {
        uScore++;
        console.log("You WON!");
        console.log("Score : " + uScore);

        movebg.style.backgroundColor = "#a2c066";
        movebg.style.color = "white";
        msgcontainer.style.backgroundColor = "olivedrab";
        msg.style.color = "white";
        msg.innerText = `You WON! Your ${usch} beats computer's ${cmch}`;
        uScr.innerText = uScore;
        cScr.innerText = cScore;
    }
    else {
        cScore++;
        console.log("You LOST!");
        console.log("Score : " + cScore);
        movebg.style.backgroundColor = "#f59090";
        movebg.style.color = "white";
        msgcontainer.style.backgroundColor = "maroon";
        msg.style.color = "white";
        msg.innerText = `You LOST! Computer's ${cmch} beats your ${usch}`;
        cScr.innerText = cScore;
        uScr.innerText = uScore;
    }
}

let playGame = (usch) => {
    console.log("User Choice : " + usch);
    const cmch = compMove();
    console.log("Computer Choice : " + cmch);

    console.log(cap(usch), cap(cmch));

    uMv.innerText = cap(usch);
    cMv.innerText = cap(cmch);

    if(usch === cmch) {
        drawCond();
    }
    else {
        let userWin = true;

        if(usch === "rock") {
            userWin = cmch === "paper" ? false : true;
        }
        else if(usch === "paper") {
            userWin = cmch === "scissors" ? false : true;
        }
        else {
            userWin = cmch === "rock" ? false : true;
        }
        showWinner(userWin, usch, cmch);
    }
}

choices.forEach((ch) => {
    console.log(ch);
    ch.addEventListener("click", () => {
        const usch = ch.getAttribute("id");
        console.log(usch);
        playGame(usch);
    });
});