<script src="../js/app.js"></script>
        let rndInt = randomIntFromInterval(1, 3);
        let computer_score = 0;
        let user_score = 0;

        //nonsense ill need to add to make branch changes

        const button = document.querySelector("button[id='rock']");   
        button.addEventListener("click", shoot_rock);
       
        const button2 = document.querySelector("button[id='paper']");   
        button2.addEventListener("click", shoot_paper);

        const button3 = document.querySelector("button[id='scissors']");   
        button3.addEventListener("click", shoot_scissors);

        const button4 = document.querySelector("button[id='reset_button']");   
        button4.addEventListener("click", reset_scores);


        function shoot_rock(){
            let input = rock;
            let rndInt = randomIntFromInterval(1, 3)
            switch(rndInt) {
                case 1:
                    document.getElementById("result").innerHTML = "Computer throws Paper. You lose...";
                    computer_score++;
                    document.getElementById("computer_score").innerHTML = `computer score: ` + `${computer_score}`;
                    break;

                case 2:
                    document.getElementById("result").innerHTML = "Computer throws Rock. Tie!";
                    break;

                case 3:
                    document.getElementById("result").innerHTML = "computer throws Scissors. You win!";
                    user_score++;
                    document.getElementById("user_score").innerHTML = `your score: ` + `${user_score}`;
                    break;
            }
            endgame();
        }

        function shoot_paper(){
            let input = paper;
            let rndInt = randomIntFromInterval(1, 3)
            switch(rndInt) {
                case 1:
                    document.getElementById("result").innerHTML = "Computer throws Paper. Tie!";
                    break;

                case 2:
                    document.getElementById("result").innerHTML = "Computer throws Rock. You win!";
                    user_score++;
                    document.getElementById("user_score").innerHTML = `your score: ` + `${user_score}`;
                    break;

                case 3:
                    document.getElementById("result").innerHTML = "Computer throws Scissors. You lose...";
                    computer_score++;
                    document.getElementById("computer_score").innerHTML = `computer score: ` + `${computer_score}`;
                    break;
            }
            endgame();
        }

        function shoot_scissors(){
            let input = scissors;
            let rndInt = randomIntFromInterval(1, 3)
            switch(rndInt) {
                case 1:
                    document.getElementById("result").innerHTML = "Computer throws Paper. You win!";
                    user_score++;
                    document.getElementById("user_score").innerHTML = `your score: ` + `${user_score}`;
                    break;

                case 2:
                    document.getElementById("result").innerHTML = "Computer throws Rock. You lose...";
                    computer_score++;
                    document.getElementById("computer_score").innerHTML = `computer score: ` + `${computer_score}`;
                    break;

                case 3:
                    document.getElementById("result").innerHTML = "Computer throws Scissors. Tie!";
                    break;
            }
            endgame();
        }
        
        function randomIntFromInterval(min, max) {
             return Math.floor(Math.random() * (max - min + 1) + min)
            } 
        function endgame(){
            if (user_score > 4 || computer_score > 4){
                document.getElementById("buttons").innerHTML = " ";


                if (user_score > 4) {
                    document.getElementById("result").innerHTML = "You Win! Refresh to play again!";
                } else if (computer_score > 4) {
                    document.getElementById("result").innerHTML = "GAME OVER. You lose. Reset to play again";
                }
            }
        }

        function reset_scores() {
            location.reload();
        }