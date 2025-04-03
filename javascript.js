let getComputerChoice = () => {
    if(Math.random()>.5){
        return "Rock";
    }else if(Math.random() <.5){
        return "Paper";
    }else{
        return "Scizzors";

    }
    
}


let getHumanChoice = () => {
    let choice = prompt("Choose: Rock, Paper, Scizzors?");
    if("Rock"){
        return "Rock";
    }else if("Paper"){
        return "Paper";
    }else{
        return "Scizzors";
    }
}
