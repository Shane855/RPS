//Generating a random item
function getComputerChoice() {
	let items = ["rock","paper","scissors"];
	let item = items[Math.floor(Math.random()*items.length)];
	return item;
}


function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
		win += 1;
		console.log("You Win " + playerSelection + " beats " + computerSelection)
	
	}
	else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
		loss += 1;
		console.log("You Lose " + computerSelection + " beats " + playerSelection)
	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
		win += 1;
		console.log("You Win " + playerSelection + " beats " + computerSelection)
		
	}
	else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
		loss += 1;
		console.log("You Lose " + computerSelection + " beats " + playerSelection)

	}
	else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
		win += 1;
		console.log("You Win " + playerSelection + " beats " + computerSelection)

	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
		loss += 1;
		console.log("You Lose " + computerSelection + " beats " + playerSelection);
		
	}
	else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
		tie += 1;
		console.log("Its A Tie");
	}
	else {
		return ("Somethings is wrong!");
	}

}

let win = 0;
let loss = 0;
let tie = 0;


function game() {
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("Do you choose rock, paper or scissors?");
		let computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		console.log("Computer = " + computerSelection);
		console.log("Wins = " + win + " Losses = " + loss + " Ties = " + tie)
	}
	if (win > loss) {
		return ("You win");
	}
	else if (loss > win) {
		return ("You lose");
	}
	else if (win === loss) {
		("Its a tie")
	}
	else {
		return ("Something is wrong");
	}
}
console.log(game());





