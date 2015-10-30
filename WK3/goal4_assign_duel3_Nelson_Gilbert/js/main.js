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
    var fighter1 = {name:Spiderman, damage:20, health:100};
    var fighter2 = {name:Batman, damage:20, health:100};
    
    //initiate round
    var round=0;

    //function equation loop to have the fight begin
    function fight(){
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);

            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            console.log(fighter1.name+": "+fighter1.health + " " + fighter2.name+":"+fighter2.health);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
            }
            else{
                alert(result);
                break;
            };

          };
    };

    //function for checking if someone is the winner or not
    function winnerCheck(){
        //no winner if bother players are still alive after round 10
        var result="no winner";
        if (fighter1.health<1 && fighter2.health<1)
        {
            result = "You Both Die";
        }
        //condition if player two wins
        else if(fighter1.health<1){
            result =fighter2.name+" WINS!!!"
        }
        //condition id player one wins
        else if (fighter2.health<1)
        {
            result = fighter1.name+" WINS!!!"
        };
       return result;
    };

    //the program begins
    fight();

})();