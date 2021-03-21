function rockPaperScissors(){
	const rps ={0:"Rock", 1: "Paper", 2: "Scissors"}; 
	const randomint = () => {
		return Math.floor(Math.random()*Math.floor(3))
	}
	const player1 = rps[randomint()]; 
	const player2 = rps[randomint()]; 

	if(player1==player2){
		return `Player 1: ${player1}\nPlayer 2: ${player2}\nIt's a tie, play again."`
	}if((player1 == "Rock" && player2 =='Scissors')||
		(player1=="Paper" && player2 == "Rock")||
		(player1=="Scissors" && player2 == "Paper")){
		return `Player 1: ${player1}\nPlayer 2: ${player2}\nPlayer 1 Wins! ${player1} beats ${player2}!`

	}if((player2 == "Rock" && player1 =='Scissors')||
		(player2=="Paper" && player1 == "Rock")||
		(player2=="Scissors" && player1 == "Paper")){
		return `Player 1: ${player1}\nPlayer 2: ${player2}\nPlayer 2 Wins! ${player2} beats ${player1}!`}  
	



}
console.log(rockPaperScissors())