let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    if(Math.random()>.5){
        return "Rock";
    }else if(Math.random() <.5){
        return "Paper";
    }else{
        return "Scizzors";

    }
    
}

getComputerChoice();


let getHumanChoice = () => {
    let choice = prompt("Choose: Rock, Paper, Scizzors?");
    if(choice === "Rock"){
        return "Rock";
    }else if(choice === "Paper"){
        return "Paper";
    }else{
        return "Scizzors";
    }
}

let playround = (humanChoice, computerChoice) => {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }else if(humanChoice === "Paper" && computerChoice === "Scizzors"){
        console.log("You lose! Scizzors beats Paper");
        computerScore++;
}else if(humanChoice === "Scizzors" && computerChoice === "Rock"){
    console.log("You lose! Rock beats Scizzors");
    computerScore++;
}else if(computerChoice === "Rock" && humanChoice === "Paper"){
    console.log("You win! Paper beats Rock");
    humanScore++;
}else if(computerChoice === "Paper" && humanChoice === "Scizzors"){
    console.log("You win! Scizzors beats Paper");
    humanScore++;
}else if(computerChoice === "Scizzors" && humanChoice === "Rock"){
    console.log("You win! Rock beats Scizzors");
    humanScore++;
}
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerchoice();

playround(humanSelection,computerSelection);


let playGame = (hscore, cscore) => {
    playround();
    playround();
    playround();
    playround();
    playround();

    hscore = humanScore;
    cscore = computerScore;

    if(hscore>cscore){
        console.log("congrats player you win!");
    }else if(hscore<cscore){
        console.log("sorry player you lose!");
    }else{
        console.log("It's a tie!")
    }
    
}