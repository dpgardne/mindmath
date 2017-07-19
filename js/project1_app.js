$ ( () => {
//start global scope
//========================================================
  let $operatorArray =
  [
    '/',
    '*',
    '+',
    '-'
  ]

  let $currentQuestion = [];
  let score = 0
  // let $holder_answer = $holder[0]

  //end global scope
  //========================================================

  //start game object
  //========================================================

    const $game = {
      playerOne: 1,
      playerTwo: 2,
      playerOneScore: 0,
      playerTwoScore: 0,
      round: 0,
      time: 30
    }



  //end game object
  //========================================================

  //start function question generator
  //========================================================

  const $questionGenerator = () => {
  let $operator = $operatorArray[Math.floor(Math.random() * $operatorArray.length)];
     console.log($operator)

  let $leftEquation = Math.floor(Math.random() * 12)
     console.log($leftEquation)


  let $rightEquation = Math.floor(Math.random() * 12)
    console.log($rightEquation)

    $currentQuestion.unshift($leftEquation + $operator + $rightEquation)
  let $newQueston = $('#input_question').text($currentQuestion[0])


  }

  //end function generator
  //========================================================

  //start continue Round function
  //========================================================

  //end continueRound function
  //========================================================

  //start function question and answer
  //========================================================

  const $questionAsk = (answer) => {
    $('#input_question').text($currentQuestion[0])
      if(parseInt(answer) === eval($currentQuestion[0])) {
        $game.playerOneScore++
        $questionGenerator();

        console.log('Correct')

      } else {
        console.log('Incorrect')

      }
  }

  //end function question and answer
  //========================================================

  //start function timer
  //========================================================
    const $TimePlay = () => {
      const $time = setInterval( ()=> {
        $game.time--
        $('#gameDiv_time').text('Time: ' + $game.time)
        if($game.time === 0) {
          clearInterval($time)
        }

      }, 1000)
    }


  //end function timer
  //========================================================

  //start button listener begin
  //========================================================
  $('#begin').on('click', () => {
    $questionGenerator();
    $TimePlay();
    //inputs question on screen



})
  //end button listener begin
  //========================================================


  //start button listener submit
  //========================================================
  $('#input_button').on('click', () => {
    let $answerValue = $('#input_field').val()
    $questionAsk($answerValue)
    let $playerOne = $('#gameDiv_score1').text('Score Player 1: ' + $game.playerOneScore)
    let $playerTwo = $('#gameDiv_score2').text('Score Player 1: ' + $game.playerTwoScore)
    //remove text from input field
    $('#input_field').val('')




  })

  //end button listener submit
  //========================================================


})
  //end
