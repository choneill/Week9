function startGame() {
    computer = Math.floor(Math.random() * 3);
    input = prompt("Type 0 for Rock, 1 for Paper or 2 for Scissors, Choose Now!!!");
    player = parseInt(input)


    if (computer == 0&& player == 1) {
        alert("You beat computer with Paper covers Rock");
      } else if ((computer = 0&& player == 2)) {
        alert("Computer beat you with Rock");
      } else if ((computer = 1&& player == 0)) {
        alert("Computer beat you With Paper");
      } else if ((computer = 1&& player == 2)) {
        alert("You beat computer with Scissor cuts Paper");
      } else if ((computer = 2&& player == 0)) {
        alert("You beat computer with Rock beats Scissor");
      } else if ((computer = 2&& player == 1)) {
        alert("Computer beat you With Scissor");
      } else if ((computer = 0&& player == 0)) {
        alert("It's a tie");
      } else if ((computer = 1&& player == 1)) {
        alert("It's a tie");
      } else if ((computer = 2&& player == 2)) {
        alert("It's a tie");
      } else {
        alert("Invalid input, please try again");
      }
    }
//while the following code doesnt appear to function correctly the aim
// was to use a while loop to count() the user input which is assigned 
//in the onclick count() section of the html. The function should
//count user input from 0,1,2 (i.e. 3 inputs) and hide the button
//after the user has had 3 tries
    function count() {
      var count=2;
      while (count>=0){
          document.getElementById('button').style.visibility = 'hidden';
        }
        }