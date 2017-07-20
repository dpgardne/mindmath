MindMath is a two-player game that challenges each player's mental math abilities. Each player has 30 seconds to solve as many math equations as they can varying from addition, subtraction, multipication, and division. Questions are uniquely generated using a random combination of numbers and operators.
==========================================================================
MVP req
>Timer to end player's turn after 30 seconds
>Multiple rounds -make game object that holds p1 score, p2 score, round, depending on selection scores remain and round increase or refresh scores and round
>Logic to compare scores and determine winner
>Wide variety of questions all randomly generated
>Accurately display score
>Dom manipulation through jQuery
  >Begin button
  >Display randomly sorted question on the dom
  >input field and submit answer
  >event listeners,
  >text to screen
  >html elements create
>Hosted on github pages with readme.md

Stretch goals
>Add bonus time for certain questions
>select level difficulty
>Have extra dom manipulation
>display players name
>smooth user experience
>reset

===============================================================================================================

Workflow

Data structures=====================================
//Array to hold operators which will be selected at random to divide each side of the equation.
    > Ex:
    var $operators =
    [
      '/,,
      '*',
      '+',
      '-',
]

//Method of selection=====================================

Select question at random with sort array
  const randomGen = () => {
    var show = $hold[Math.floor(Math.random() * $hold.length)];
      console.log(show)

    var show_1 = Math.floor(Math.random() * 12)
      console.log(show_1)


    var show_2 = Math.floor(Math.random() * 12)
      console.log(show_2)

      $holder.push(show_1 + show + show_2)

    }

//Display selection on the dom=====================================

//rewrite prompts with input values
const myArray_2 = () => {
  let question = prompt($holder[0])
  let question_1 = parseInt(question)
    if(question_1 === parseInt($holder[0])) {
      console.log('success')
    } else{

console.log('you did it')
    }
}


//Let user enter input==========================================================================
  //If value of input = the parseInt of the question then player's score increases appropriately

  //Game objects==========================================================================
  //properties
    >p1 score
    >p2 score
    >round
    >methods
