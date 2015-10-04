/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/
//Pseudo code
//Inform User that a fight has begun
    //Show user The names and player health variable
    //Begin loop or Fight function for up to ten rounds
        //use math random to get characters to do damage to each other
        //If character health reaches zero
            //end loop and announce player with health left as winner
        //Else
            //loop continues to next round and announces new round along with remaining health of players
        //If both players reach zero
            //end loop and announce that both players lose
        //Else
            //loop continues to next round and announces new round along with remaining health of players
        //If bother players have health remaining at round 10
            //end loop and announce that the battle ends at a draw
    //End of loop
//End of battle
// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    //function equation loop to have the fight begin
    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    //function for checking if someone is the winner or not
    function winnerCheck(){
        //no winner if bother players are still alive after round 10
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        }
        //condition if player two wins
        else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        }
        //condition id player one wins
        else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    //the program begins
    fight();

})();