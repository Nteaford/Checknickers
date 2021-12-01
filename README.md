# Checknickers
## Welcome to Checknickers - a simplified version of the true "Game of Kings"
---

## Checknickers is based off of checkers, with a couple of rule modifications.

## Traditional Checkers Rules: 

> Game Pieces and Board 
>
> - Checkers is a board game played between two people on an 8x8 checked board. 
> - Each player has a team, and each team has 12 pieces that fit inside each of the boxes on the board. The pieces are placed on every other dark square and then staggered by rows. 
> - The player's teams have different colored pieces from each other.
>
> Taking a Turn 
> - The darker color pieces moves first. Each player takes their turn by moving a piece. Pieces are always moved diagonally and can be moved in the following ways:
> - Diagonally in the forward direction (towards the opponent) to the next dark square.
> - If there is an opponent's piece in your diagonal-forward direction, and an empty space on the other side (in that same diagonal-forward direction), you jump/capture your opponent and remove their piece. You can do multiple jump/captures if they are lined up in the forward direction.
> - If you have a jump/capture, you have no choice but to take it.
>
> King Pieces:
> - The last row is called the king row. If you get a piece across the board to the opponent's king row, that piece becomes a king. Another piece is placed onto that piece so it is now two pieces high. King pieces can move (and jump/capture) in both directions, forward and backward. 
> - Once a piece is kinged, the player must wait until the next turn to jump out of the king row. 
>
> Winning the Game 
> - You win the game when the opponent has no more pieces or can't move (even if he/she still has pieces). If neither player can move then it is a draw or a tie. 
>

## Checknickers Rules:
Game Pieces and Board 
- Checknickers is a board game played between two people on an 8x8 checked board. 
- Each player has a team, and each team has 12 pieces that fit inside each of the boxes on the board. The pieces are placed on every other dark square and then staggered by rows. 
- The player's teams have different colored pieces from each other.

Taking a Turn 
- Black Team moves first. Each player takes their turn by moving a piece. Pieces are always moved diagonally and can be moved in the following ways:
- Diagonally in the forward direction (towards the opponent) to the next dark square.
- If there is an opponent's piece in your diagonal-forward direction, and an empty space on the other side (in that same diagonal-forward direction), you jump/capture your opponent and remove their piece. ~~You can do multiple jump/captures if they are lined up in the forward direction.~~
- ~~If you have a jump/capture, you have no choice but to take it.~~

King Pieces:
- The last row is called the king row. If you get a piece across the board to the opponent's king row, that piece becomes a king. ~~Another piece is placed onto that piece so it is now two pieces high.~~ King pieces can move (and jump/capture) in both directions, forward and backward. 
- Once a piece is kinged, the player must wait until the next turn to jump out of the king row. 

Winning the Game 
- You win the game when the opponent has no more pieces ~~or can't move (even if he/she still has pieces)~~. ~~If neither player can move then it is a draw or a tie.~~

---

## Screenshots (Gameplay Examples):
![Gameboard Screenshot](https://i.imgur.com/AvCZkPF.png)
Mid-game view

![Gameboard Screenshot2](https://i.imgur.com/eeekPUp.png)
Red Queen Movement Options

![Gameboard Screenshot3](https://i.imgur.com/lsglsCe.png)
Red Wins!

---

## Technologies Used
- HTML
- CSS
- JS
- Chrome Browser (troubleshooting, rendering code changes )
- VS Code (code editor)

## Getting Started
- You can link to the game [here.](https://nteaford.github.io/Checknickers/)
- Make sure you read the rules ABOVE!

- Black Team will begin -- click on a black token to view movement options (make sure you're not blocked by your own team!).
- Yellow squares will indicate where you can move. If you don't love your movement options, go ahead and select another black token.
- When you've made your movement decision, click on the desired yellow square to move your token to that square. Once you do, it will be the Red Team's turn. 
- Red Team operates in the same way as the Black Team, outlined above.

---

## Next Steps/Icebox Items

- [ ] Add Mandatory Capture
- [ ] Add Double-Jump/Capture Functionality
- [ ] Add Triple-Jump Functionality
- [x] Become the World Champion Checknickers Player

---

## Pseudocode and Logic Dump for my Game

Commonspeak for how checkers is going to work:

* 64 square grid based on array
* game state with 64 item array
* red team on top of screen, black team on bottom of screen
* two players - one with black tokens one with red - black goes first
* when a token is clicked:
    * it is highlighted yellow
    * the squares to which it could move are highlighted yellow 
        





Logic Order:
* turnCheck ?  blkTurn : redTurn
* Listen to token click -> if tkn class = (example 'red') !=== turnCheck (redTurn), click unavailable)
    * Look at where you are (currentSquare = idx) (Are you in a restricted space [edge]?) limitMove : !limitMove
    * Determine potential move spaces using functionMOVECALCULATOR -- output = (moveSpaceOption1 and moveSpaceOption2)
        * Is your moveSpaceOption1 unnoccupied?  ----> moveSpaceOption1 is AVAILABLE
        * Is your moveSpaceOption1 occupied by a token with the same class? (token moving class = 'black' and occupied square token class = 'black' ----> moveSpaceOption1 is UNAVAILABLE 
        * Is your moveSpaceOption1 occupied by a token with a different class? (token moving class = 'black' and occupied square token class = 'red' 
            *is moveSpaceOption1 = restricted space?
                *if yes - break
                *if no - continue
            
        *if moveSpaceOption1 !=== restricted space
             *  let jumpSpaceOption = (currentSquare -18) [for black's turn]) 
                * is jumpSpaceOption occupied?
                    * Yes -> Negate moveSpaceOption1
                    * No -> set moveSpaceOption1 to jumpSpaceOption and begin function DOUBLE JUMP CHECK

        * function DOUBLEJUMPCHECK will set currentSpace = moveOption1 and run function MOVECALCULATOR again


 King Token Split                   
* Listen to token click -> if tkn class = (example 'red') !=== turnCheck (redTurn), click unavailable)
    * Look at where you are (currentSquare = idx) (Are you in a restricted space [edge]?) limitMove : !limitMove
    * Determine potential move spaces using functionMOVECALCULATOR --> output = (moveSpaceOption1 and moveSpaceOption2)
        * Is your moveSpaceOption1 unnoccupied?  ----> moveSpaceOption1 is AVAILABLE
        * Is your moveSpaceOption1 occupied by a token with the same class? (token moving class = 'black' and occupied square token class = 'black' ----> moveSpaceOption1 is UNAVAILABLE 
        * Is your moveSpaceOption1 occupied by a token with a different class? (token moving class = 'black' and occupied square token class = 'red' 
            *is moveSpaceOption1 = restricted space?
                *if yes - break
                *if no - continue
            
        *if moveSpaceOption1 !=== restricted space
             *  let jumpSpaceOption = (currentSquare -18) [for black's turn]) 
                * is jumpSpaceOption occupied?
                    * Yes -> Negate moveSpaceOption1
                    * No -> set moveSpaceOption1 to jumpSpaceOption and begin function DOUBLE JUMP CHECK

        * function DOUBLEJUMPCHECK will set currentSpace = moveOption1 and run function MOVECALCULATOR again
        currentSpaceReal
        currentSpacePotential







        black
            moveSpaceOption1 (x-9)
            moveSpaceOption2 (x-7)

        red
             moveSpaceOption1 (x+7)
            moveSpaceOption2 (x+9)    

        black king
            moveSpaceOption1 (x-9)
            moveSpaceOption2 (x-7)
            moveSpaceOption3 (x+9)
            moveSpaceOption4 (x+7)

        red king
            moveSpaceOption1 (x+7)
            moveSpaceOption2 (x+9)  
            moveSpaceOption3 (x-7)
            moveSpaceOption4 (x-9)


if turn = 'blk' and currentSquare = "40", moveSpaceOption 1 = OKAY and moveSpaceOption2 = NOT AVAILABLE
wireframe for reference: https://app.diagrams.net/#G1tKjMxSxHu9YUoSEgqzZwfCW6NPAWTeyP





* Move Logic:
    *Black Team Normal Token to Unoccupied Square
        * Can only move from square x to square (x - 9) or (x - 7) 
            * UNLESS on square 24, 40, 56 (where you can only move to square - 9)
             or
            * On square 9, 25, 41, 57 ((where you can only move to square - 7)
  
    *Black Team Normal Token to Capture
        * If square x to square (x - 7) is occupied, is square (x-14) occupied?
            

        * If square x to square (x - 9) is occupied, is square (x-18) occupied? IF NOT, MOVE THERE AND (X-9) is removed

            I think this logic should stay the same

            * IF square x = 24, 40, 56 (where you can only move to square - 9)
             or
            * On square 9, 25, 41, 57 ((where you can only move to square - 7)
    
    *Red Team Normal Token to Unoccupied Square
        * Can only move from square x to square (x + 9) or (x + 7) 
            * UNLESS on square 24, 40, 56 (where you can only move to square + 7)
             or
            * On square 9, 25, 41, 57 ((where you can only move to square + 9)

    
    *Red Team Normal Token to Unoccupied Square
        * Can only move from square x to square (x + 9) or (x + 7) 
            * UNLESS on square 24, 40, 56 (where you can only move to square + 7)
             or
            * On square 9, 25, 41, 57 ((where you can only move to square + 9)
    



    *King Move token 
        * if a token with "class = black" reaches 2,4,6,or 8, set class as "king"
        * if a token with "class = red" reaches 57, 59, 61,or 63, set class as "king"
      












1) Define required constants
* players
* turns
* board (create dynamically)
* gamestate

2) Define required variables used to track the state of the game
*currentTurn
*currentSpace
*restrictedSpace []
*moveSpaceOption1
*moveSpaceOption2
*moveSpaceOption3 - null except for king
*moveSpaceOption4 - null except for king
*jumpSpaceOption
*blackToken1 class = "black" "soldier"/"king" 
*blackToken2
*blackToken3
*blackToken4
*blackToken5
*blackToken6
*blackToken7
*blackToken8
*blackToken9
*blackToken10
*blackToken11
*blackToken12
*redToken1  class = "black" "soldier"/"king" 
*redToken2
*redToken3
*redToken4
*redToken5
*redToken6
*redToken7
*redToken8
*redToken9
*redToken10
*redToken11
*redToken12

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.


4) Upon loading the app should:

function render() 
    should be the only function updating the dom


	4.1) Initialize the state variables
	4.2) Render those values to the page
	4.3) Wait for the user to click a token


5) Handle a player clicking a token


6) Handle a player clicking the "new game" button








/*----- constants -----*/
const moveLookup = {
    black: {
        soldier: {
            moveOption1: (currentSquare - 9)
            moveOption2: (currentSquare - 7)
        }
        king: {
            moveOption1: (currentSquare - 9)
            moveOption2: (currentSquare - 7)
            moveOption3: (currentSquare + 9)
            moveOption4: (currentSquare + 7)
        }
        red: {
        soldier: {
            moveOption1: (currentSquare + 7)
            moveOption2: (currentSquare + 9)
        }
        king: {
            moveOption1: (currentSquare + 7)
            moveOption2: (currentSquare + 9)
            moveOption3: (currentSquare - 7)
            moveOption4: (currentSquare - 9)
        }
    }


}


/*----- app's state (variables) -----*/




/*----- cached element references -----*/



/*----- event listeners -----*/



/*----- functions -----*/