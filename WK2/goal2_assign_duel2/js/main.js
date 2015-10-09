/**
 * Duel Fight Week 2
 * Gilbert Nelson

 Assn. 2
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

    //player array
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];
    
    //initiate round
    var round=0;

    //function equation loop to have the fight begin
    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

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
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        }
        //condition if player two wins
        else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        }
        //condition id player one wins
        else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
       return result;
    };

    //the program begins
    fight();

})();