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

    $currentQuestion.push($leftEquation + $operator + $rightEquation)

    // $questionAsk();
  }

  //end function generator
  //========================================================

  //start function question and answer
  //========================================================

  const $questionAsk = (answer) => {

      if(parseInt(answer) === eval($currentQuestion[0])) {
        console.log('Correct')

      } else {
        console.log('Incorrect')

      }
  }

  //end function question and answer
  //========================================================

  //start button listener begin
  //========================================================
  $('#begin').on('click', () => {
    $questionGenerator();
  $('#input_question').text($currentQuestion[0])
})
  //start button listener begin
  //========================================================


  //start button listener submit
  //========================================================
  $('#input_button').on('click', () => {
    let $answerValue = $('#input_field').val()
    $questionAsk($answerValue)

    console.log($answerValue)
  })

  //start button listener submit
  //========================================================


})
  //end
