var playCount = 0;
var count1 = 0;
var count2 = 0;
function displayDice(){
  //The maximum value is exclusive and the min val is inclusive
  var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
  var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
  var imageP1 = document.querySelectorAll("img")[0];
  var imageP2 = document.querySelectorAll("img")[1];
  imageP1.src = "images/dice" + dicePlayer1 + ".png";
  // or use setAttribute imageP1.setAttributes("attribute to be changed(src)", "Value of attribute")
  imageP2.src = "images/dice" + dicePlayer2 + ".png";
  var title =   document.querySelector("#title");

  if(dicePlayer1 > dicePlayer2) {
   title.textContent = "🎈 Mel Wins!";
   title.classList.add("#title");
   count1++;
   //document.querySelector("#counterP1").textContent = count1.toString();

  } else if (dicePlayer2 > dicePlayer1) {
   title.textContent = "Ornel Wins!🎈 ‍";
   title.classList.add("#title");
   count2++;
   //document.querySelector("#counterP2").textContent =count2.toString();

  } else {
   title.textContent = "Twinning 👯";
   title.classList.add("#title");
  }
  playCount++;

  if(playCount === 10) {
    if(count1 > count2 ) {
      title.textContent = "Round Winner: Mel 🏆";
      count1=0;
      count2=0;
      playCount=0;
    } else if (count1 < count2){
        title.textContent = "Round Winner: Ornel 🏆";
        count1=0;
        count2=0;
        playCount=0;
    } else {
        title.textContent = "Oh Oh! No Winner";
        count1=0;
        count2=0;
        playCount=0;
    }
  }
}
