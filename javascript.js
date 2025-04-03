let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    if(Math.random()<.33){
        return "Rock";
    }else if(Math.random() <.66){
        return "Paper";
    }else{
        return "Scissors";

    }
    
}




let getHumanChoice = () => {
    let choice = prompt("Choose: Rock, Paper, Scissors?");
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    if(choice === "Rock"){
        return "Rock";
    }else if(choice === "Paper"){
        return "Paper";
    }else{
        return "Scissors";
    }
}

let playround = (humanChoice, computerChoice) => {

if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
}else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
}else if(humanChoice === "Scissors" && computerChoice === "Rock"){
    console.log("You lose! Rock beats Scissors");
    computerScore++;
}else if(computerChoice === "Rock" && humanChoice === "Paper"){
    console.log("You win! Paper beats Rock");
    humanScore++;
}else if(computerChoice === "Paper" && humanChoice === "Scissors"){
    console.log("You win! Scissors beats Paper");
    humanScore++;
}else if(computerChoice === "Scissors" && humanChoice === "Rock"){
    console.log("You win! Rock beats Scissors");
    humanScore++;

}
}


console.log("Round 1: ");
playround(getHumanChoice(), getComputerChoice());
console.log("Round 2: ");
playround(getHumanChoice(), getComputerChoice());
console.log("Round 3: ");
playround(getHumanChoice(), getComputerChoice());
console.log("Round 4: ");
playround(getHumanChoice(), getComputerChoice());
console.log("Round 5: ");
playround(getHumanChoice(), getComputerChoice());



let playGame = (hscore, cscore) => {

    

    if(hscore>cscore){
        console.log("congrats player you win!");
    }else if(hscore<cscore){
        console.log("sorry player you lose!");
    }else{
        console.log("It's a tie!")
    }
    
}




playGame(humanScore, computerScore);