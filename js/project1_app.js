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
      winsPlayerOne: 0,
      winsPlayerTwo: 0,
      ties: 0,
      playerTurn: 0,
      playerOne: 1,
      playerTwo: 2,
      playerOneScore: 0,
      playerTwoScore: 0,
      round: 0,
      time: 5,
      gameWinner() {
          if($game.winsPlayerOne === 2) {
            $('#begin_winner').text('Player 1 has won best 2:3').css('color', '#96CA2D')
          } else if($game.winsPlayerTwo === 2) {
            $('#begin_winner').text('Player 2 has won best 2:3').css('color', '#96CA2D')
          }
      }
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
      if(parseInt(answer) === eval($currentQuestion[0]) && $game.playerTurn === 1) {
        $game.playerOneScore++
        $questionGenerator();

        console.log('Correct')

      } else if(parseInt(answer) !== eval($currentQuestion[0]) && $game.playerTurn === 1) {
        $questionGenerator();
        console.log('Incorrect')

      } else if(parseInt(answer) === eval($currentQuestion[0]) && $game.playerTurn === 2) {
          $game.playerTwoScore++
          $questionGenerator();
          console.log('Correct')
      } else if(parseInt(answer) !== eval($currentQuestion[0]) && $game.playerTurn === 2) {
          $questionGenerator();
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
        if($game.time === 0 && $game.round === 1 && $game.playerTurn === 1) {
          clearInterval($time)
          // $('#input_button').remove()
          // $('#begin_button').remove()
           $('#begin_button').text('Player 2: Click to begin')
          // let $playerTwoBegin = $('#playerTwo').attr('id', 'input_button2').text('Player 2: Click to begin')
        } else if($game.time === 0 && $game.round === 1 && $game.playerTurn === 2) {
          clearInterval($time)
          if($game.playerTwoScore > $game.playerOneScore) {
          $('#begin_winner').text('Player 2 has won round: ' + $game.round)
          $game.winsPlayerTwo++
          $('#gameDiv_wins2').text('Wins player 2: ' + $game.winsPlayerTwo)
          $('#begin_button').text('Play best 2:3?')
        } else if($game.playerTwoScore < $game.playerOneScore) {
          $('#begin_winner').text('Player 1 has won round: ' + $game.round)
          $game.winsPlayerOne++
          $('#gameDiv_wins1').text('Wins Player 1: ' + $game.winsPlayerOne)
          $('#begin_button').text('Play best 2:3?')
        } else if($game.playerTwoScore === $game.playerOneScore) {
          $('#begin_winner').text('Player 1 and 2 tied round: ' + $game.round)
          $game.ties++
          $('#gameDiv_ties').text('Ties: ' + $game.ties)
          $('#begin_button').text('Play best 2:3?')
        }
      } else if($game.time === 0 && $game.round === 2 && $game.playerTurn === 1) {
        clearInterval($time)
      }

      }, 1000)
    }


  //end function timer
  //========================================================

  //start button listener begin
  //========================================================
  $('#begin').on('click', () => {
    if($game.playerTurn === 0) {
    $game.playerTurn++
    $game.round++
    $('#gameDiv_round').text('Round: ' + $game.round)

    $('#gameDiv_player').text('Player\'s turn: ' + $game.playerTurn ).css('color', '#96CA2D')
    $questionGenerator();
    $TimePlay();
  } else if($game.playerTurn === 1) {
    $game.playerTurn++
    $('#gameDiv_player').text('Player\'s turn: ' + $game.playerTurn ).css('color', '#96CA2D')
    $('#input_field').val('')
    $game.time = 10

    $questionGenerator();
    $TimePlay()
  } else if ($game.playerTurn === 2 && $game.round === 1) {
    $game.round++
    $('#gameDiv_round').text('Round: ' + $game.round)
    $game.playerOneScore = 0
    $('#gameDiv_score1').text('Score Player 1: ' + $game.playerOneScore)
    $game.playerTwoScore = 0
    $('#gameDiv_score2').text('Score Player 1: ' + $game.playerTwoScore)
    $game.playerTurn--
    $('#gameDiv_player').text('Player\'s turn: ' + $game.playerTurn ).css('color', '#96CA2D')
    $game.time = 10
    $('#begin_winner').css('color', 'white')

    $questionGenerator();
    $TimePlay()
  }
    //inputs question on screen



})
  //end button listener begin
  //========================================================


  //start button listener submit
  //========================================================
  $('#input_button').on('click', () => {
    if($game.time > 0){
    let $answerValue = $('#input_field').val()
    $questionAsk($answerValue)
    let $playerOne = $('#gameDiv_score1').text('Score Player 1: ' + $game.playerOneScore)
    let $playerTwo = $('#gameDiv_score2').text('Score Player 1: ' + $game.playerTwoScore)
    //remove text from input field
    $('#input_field').val('')
    console.log('this works')
  } else {

  }
  })

  //end button listener submit
  //========================================================







})
  //end
