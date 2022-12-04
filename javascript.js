function getComputerChoice() {
	let items = ["rock","paper","scissors"];
	let item = items[Math.floor(Math.random()*items.length)];
	return item;
}
const result = document.querySelector('.result');
//if(document. getElementById('button'). clicked == true)
//const btn = document.querySelector('#rock');
function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
		win += 1;
		result.textContent = "Player Won Rock Beats Scissors"
		console.log("You Win " + playerSelection + " beats " + computerSelection)

	}
	else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
		loss += 1;
		result.textContent = "Computer Won Rock Beats Scissors"
		console.log("You Lose " + computerSelection + " beats " + playerSelection)
	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
		win += 1;
		result.textContent = "Player Won paper beats rock"
		console.log("You Win " + playerSelection + " beats " + computerSelection)

	}
	else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
		loss += 1;
		result.textContent = "Computer Won Paper Beats Rock"
		console.log("You Lose " + computerSelection + " beats " + playerSelection)

	}
	else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
		win += 1;
		result.textContent = "Player Won Scissors Beats paper"
		console.log("You Win " + playerSelection + " beats " + computerSelection)

	}
	else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
		loss += 1;
		result.textContent = "Computer Won Scissors Beats Paper"
		console.log("You Lose " + computerSelection + " beats " + playerSelection);

	}
	else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
		tie += 1;
		result.textContent = "Its a Tie"
		console.log("Its A Tie");
	}
	else {
		return ("Somethings is wrong!");
	}
}

let win = 0;
let loss = 0;
let tie = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('click', () => {
	game("rock");
});
paper.addEventListener('click', () => {
	game("paper");
});
scissors.addEventListener('click', () => {
	game("scissors");
});

function game(playerChoice) {
	document.getElementById('Wins').innerHTML = win;
	document.getElementById('Losses').innerHTML = loss;
	document.getElementById('Ties').innerHTML = tie;
	let playerSelection = playerChoice;
	let computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
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





