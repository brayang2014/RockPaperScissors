let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3) + 1;
    if(num === 1){
        return "Rock";
    }else if(num === 2){
        return "Paper";
    }else{
        return "Scissors";

    }
    
}



let playround = (humanChoice, computerChoice) => {

if(humanChoice === "Rock" && computerChoice === "Paper"){
    computerScore++;
    document.getElementById("result").textContent = `Computer: ${computerScore}`;
}else if(humanChoice === "Paper" && computerChoice === "Scissors"){
    computerScore++;    
    document.getElementById("result").textContent = `Computer: ${computerScore}`;
}else if(humanChoice === "Scissors" && computerChoice === "Rock"){
    computerScore++;
    document.getElementById("result").textContent = `Computer: ${computerScore}`;
}else if(computerChoice === "Rock" && humanChoice === "Paper"){
    humanScore++;
    document.getElementById("result2").textContent = `You: ${humanScore}`;
}else if(computerChoice === "Paper" && humanChoice === "Scissors"){
    humanScore++;
    document.getElementById("result2").textContent = `You: ${humanScore}`;
}else if(computerChoice === "Scissors" && humanChoice === "Rock"){
    humanScore++;
    document.getElementById("result2").textContent = `You: ${humanScore}`;
}
playGame(humanScore, computerScore);
}


const button1 = document.querySelector(".rock");
const button2 = document.querySelector(".paper");
const button3 = document.querySelector(".scissors");

button1.addEventListener("click", () => {
    playround("Rock", getComputerChoice());
});
button2.addEventListener("click", () => {
    playround("Paper",getComputerChoice());
});
button3.addEventListener("click", () => {
    playround("Scissors",getComputerChoice());
});



let playGame = (hscore, cscore) => {



    if(hscore == 5){
        alert("congrats player, you win!")
        humanScore = 0;
        computerScore = 0;
    }else if(cscore == 5){
        alert("sorry player, you lose!")
        humanScore = 0;
        computerScore = 0;
    }
    document.getElementById("result").textContent = `Computer: ${computerScore}`;
    document.getElementById("result2").textContent = `You: ${humanScore}`;


}





