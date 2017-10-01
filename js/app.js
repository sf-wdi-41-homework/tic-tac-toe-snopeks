// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('sanity check! app.js is here., document is ready.')
  var played = 0;
  var len = $(".box").length;
  $(".box").on('click', function(event){
    var notPlayed = true;
    //add an X to make a move, add classes "played" and "X".
    if($(event.target).hasClass("played") === false){
      console.log("in if statement")
      $(event.target).text("X").addClass("played X")
      played ++;
    } else {
      console.log("this box is taken, try again!")
      notPlayed = false;
    }
    //loop over the gameboard boxes
    while(notPlayed && played < len){
      //add randomizing math
      var random = Math.floor(Math.random() * len);
      //console.log($(".box").hasClass("played"))
      //if the square is not "played"
      if($(".box")[random].classList.contains("played") === false){
        //have the computer mark a O to make their move
        //and add classes "played" and "O"
        $(".box").eq(random).text("O").addClass("played O")
        played ++;
        notPlayed = false;
      } else {
        console.log("this box is played, try another");
      }
    }
    // how to find the id of the box I clicked:
    // console.log(event.target.id)
  });

  $('button').on('click', function resetBoard(){
    // change text inside of each box
    $('.box').text(null);
    $('.box').removeClass("played")
    played = 0;
  });

  // all code to manipulate the DOM
  // goes inside this function

});
