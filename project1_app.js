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

    $questionAsk();
  }

  //end function generator
  //========================================================

  //start function question and answer
  //========================================================

  const $questionAsk = () => {
    let $question = prompt($currentQuestion[0])
      //make user answer a string
    let $question_1 = parseInt($question)
      console.log($question_1)
      if($question_1 === eval($currentQuestion[0])) {
        console.log('Correct')

      } else {
        console.log('Incorrect')
      }
  }

  //end function question and answer
  //========================================================



  $questionGenerator();










})
  //end
