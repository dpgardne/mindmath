## Link to live site

[Live Site](https://dpgardne.github.io/)

## MindSolve introduction

MindSolve is a two-player game that challenges each player's mental math abilities. Each player has 30 seconds to solve as many math equations as they can varying from addition, subtraction, multipication, and division. Questions are uniquely generated using a random combination of numbers and operators.

## MVP req
- Timer to end player's turn after 30 seconds
- Multiple rounds -make game object that holds p1 score, p2 score, round, depending on selection scores remain and round increase or refresh    scores and round
- Logic to compare scores and determine winner
- Wide variety of questions all randomly generated
- Accurately display score
- Dom manipulation through jQuery
  - Begin button
  - Display randomly sorted question on the dom
  - input field and submit answer
  - event listeners,
  - text to screen
  - html elements create
- Hosted on github pages with readme.md

## Stretch goals
- Add bonus time for certain questions
- select level difficulty
- Have extra dom manipulation
- display players name
- smooth user experience
- reset


# Workflow

![Image 1](/images/20170719_083458.jpg)

![Image 2](/images/20170719_083519.jpg)




## Data structures
**Array to hold operators which will be selected at random to divide, multiply, add, or subtract each side of the equation.**
    **The left side and the right side of the equation will be completed with Math.random. Only the operators will be held in an array**


## Method of selection

**Select question at random with a function that randomly generates the left side of the equation, the operator, and the right side of the equation.**


  const randomGen = () => {
    var show = $hold[Math.floor(Math.random() * $hold.length)];
      console.log(show)

    var show_1 = Math.floor(Math.random() * 12)
      console.log(show_1)


    var show_2 = Math.floor(Math.random() * 12)
      console.log(show_2)

      $holder.push(show_1 + show + show_2)

    }

## Display selection on the dom

The randomly generated question should be displayed on the DOM.


## Let user enter input
  - Allow the user to enter their answer to each question in an input field.
  - If value of input = the parseInt of the question then player's score increases appropriately

  - Game objects
  **There should be a object called game. This will contain all the player's scores and in addition all the round information. This object will be crucial for making correct if statements.**

  ## Properties of game object
    - p1 score
    - p2 score
    - p1 wins
    - p2 wins
    - round
    - method to check if winner
