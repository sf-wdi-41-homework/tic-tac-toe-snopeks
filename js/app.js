// wait for the DOM to finish loading
$(document).ready(function() {
  console.log('sanity check! app.js is here., document is ready.')
  var played = 0;
  var len = $(".box").length;
  //When you click:
  $(".box").on('click', function(event){
    var notPlayed = true;
    //add an X to make a move, add classes "played" and "X".
    if($(event.target).hasClass("played") === false){
      console.log(event.target.id)
      $(event.target).text("X").addClass("played X")
      played ++;
      notPlayed = checkWins();
    } else {
      console.log("this box is taken, try again!")
      notPlayed = false;
    }


    //Add 0: loop over the gameboard boxes
    while(notPlayed && played < len){
      //add randomizing math
      var random = Math.floor(Math.random() * len);
      //if the square is not "played"
      if($(".box")[random].classList.contains("played") === false){
        //have the computer mark a O to make their move
        //and add classes "played" and "O"
        $(".box").eq(random).text("O").addClass("played O")
        played ++;
        notPlayed = false;
        checkWins();
      } else {
        console.log("this box is played, try another");
      }
    }

    // how to find the id of the box I clicked:
    // console.log(event.target.id)
    // console.log(played)
    // console.log($('.box').hasClass('played'))
  });

  //how to win: three X's or three O's in a row.
  //the row can be vertical, horizontal or diagonal
  //all wins:
  //vertical: box1 + box4 + box7, box2 + box5 + box8, box3 + box6 + box9
  //horizontal: box1 + box2 + box3, box4 + box5 + box6, box7 + box8 + box9
  //diagonal: box1 + box5 + box9, box3 + box5 + box7

  function checkWins(){
    if($('#box1').hasClass("X") && $('#box2').hasClass("X") && $('#box3').hasClass("X")){
      alert("X wins!")
      // $('.box').off('click')
      return false;

    }
    if($('#box1').hasClass("O") && $('#box2').hasClass("O") && $('#box3').hasClass("O")){
      alert("O wins!")
      // $('.box').off('click')
      return false;
    }
    return true;
  }

  //reset the board for a new game
  $('button').on('click', function resetBoard(){
    // remove text inside of each box
    $('.box').text(null);
    // remove all the gameplay classes
    $('.box').removeClass("played")
    $('.box').removeClass("X")
    $('.box').removeClass("O")
    played = 0;
  });

  // all code to manipulate the DOM
  // goes inside this function

});
