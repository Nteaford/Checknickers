/*----- app's state (variables) -----*/
let playerTurn, currentSelection, currentSpace, moveOption1, moveOption2, moveOption3, moveOption4, tokenTeamSelected, tokenRankSelected;


/*----- constants -----*/
const gameState = [];
const blkTurnLookup = {
    tokenUsed: "black--token",
}

const redTurnLookup = {
    tokenUsed: "red--token",
}




/*----- cached element references -----*/



/*----- event listeners -----*/
document.querySelector(".game--container").addEventListener('click', moveCalculator);
document.querySelector(".game--container").addEventListener('click', moveToken);



/*----- functions -----*/

init();

function init () {
    playerTurn = blkTurnLookup;
    currentSpace = 0;

    for (let i = 1; i <= 64; i++) {
        gameState.push("");
        for (let i = 1; i <= 7; i+=2) {
            gameState[i] = "red--token";
            }
        for (let i = 8; i <= 14; i+=2) {
            gameState[i] = "red--token";
            }
        for (let i = 17; i <= 23; i+=2) {
            gameState[i] = "red--token";
            }
        for (let i = 62; i >= 56; i-=2) {
            gameState[i] = "black--token";
                }
        for (let i = 55; i >= 49; i-=2) {
            gameState[i] = "black--token";
                }
        for (let i = 46; i >= 40; i-=2) {
            gameState[i] = "black--token";
                }
    }
}
    

function moveCalculator(e) {
    //reset checkerboard squares to grey
    let x = document.querySelectorAll(".potentialMove");
    x.forEach(checkerbox => checkerbox.classList.remove("potentialMove"));
    //set current token type
    tokenRankSelected = tokenTypeLookup(e);
    //confirm that this token is allowed to move
    tokenTeamSelected = turnCheck(e);
    //set currentSpace variable
    currentSpace = parseInt(currentSpace = e.target.parentElement.getAttribute("id"));
    
    
    const moveLookup = {
        "black--token": {
            soldier: {
                moveOption1: (currentSpace - 9),
                moveOption2: (currentSpace - 7),
                restrictedSquares: {
                    8: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    23: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    24: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    39: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    40: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    55: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    56: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                },
            },
            king: {
                moveOption1: (currentSpace - 9),
                moveOption2: (currentSpace - 7),
                moveOption3: (currentSpace + 9),
                moveOption4: (currentSpace + 7),
                restrictedSquares: {
                    
                    7: { moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace + 7), 
                    },
                    8: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null, 
                    },
                    23: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    24: {moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null, 
                    },
                    39: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    40: {moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null,
                    },
                    55: {  moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    56: {moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: null, 
                        moveOption4: null, 
                    },
                },
            },
        },
        "red--token": {
            
            soldier: {
                moveOption1: (currentSpace + 9),
                moveOption2: (currentSpace + 7),
                restrictedSquares: {
                    8: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    23: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    24: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    39: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    40: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    55: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    56: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                },
            },
            
            king: {
                moveOption1: (currentSpace - 9),
                moveOption2: (currentSpace - 7),
                moveOption3: (currentSpace + 9),
                moveOption4: (currentSpace + 7),
                restrictedSquares: {
                    
                    7: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: null, 
                        moveOption4: null, 
                    },
                    8: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7), 
                    },
                    23: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4: null,
                    },
                    24: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7),  
                    },
                    39: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4:  null,
                    },
                    40: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7), 
                    },
                    55: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4: null,
                    },
                    56: {moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7),  
                    },
                },
            },
        },
    }
    
    //determine moveOptions
    moveOption1 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption1;
    moveOption2 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption2;
    console.log(`you are at ${currentSpace}`);
    console.log(`you can move to ${moveOption1}`);
    console.log(`you can move2 to ${moveOption2}`);
    // console.log(moveLookup[tokenTeamSelected][tokenRankSelected]);
    
    //determine movement restrictions
    let restrictedCheck = currentSpace;
    if (moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck]) {
        moveOption1 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption1;
        moveOption2 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption2;
        console.log(`updated move ${moveOption1}`);
        console.log(`updated move2 ${moveOption2}`);
    };

    if (gameState[moveOption1] === playerTurn.tokenUsed) {
        moveOption1 = null;
    };
    if (gameState[moveOption2] === playerTurn.tokenUsed) {
        moveOption2 = null;
    };
    
    //display move options on board
    if (moveOption1 !== null) {
    let moveOption1Display = moveOption1.toString();
    document.getElementById(moveOption1Display).classList.add("potentialMove");
    };
    if (moveOption2 !== null) {
    let moveOption2Display = moveOption2.toString();
    document.getElementById(moveOption2Display).classList.add("potentialMove");
    };

    document.getElementById(".game--container").addEventListener('click', moveToken);
};

function tokenTypeLookup (e) { 
    tokenTypeSelected = playerTurn.tokenUsed; 
    let tokenRankHalfway = e.target.getAttribute("class");
    tokenRankHalfway = tokenRankHalfway.split(" ");
    return tokenRank = tokenRankHalfway[1];
    // console.log(tokenRank);
    
}

function turnCheck (e) {
    let tokenSelected = e.target.getAttribute("class");
    let regex = new RegExp(playerTurn.tokenUsed);
    let match = tokenSelected.match(regex);
    // console.log(match);
    
    if (match) {
        return playerTurn.tokenUsed 
    }
    alert("Wait your turn!");
};

function moveToken (e) {
   let movingToken = e.target.getAttribute("id");

    console.log(movingToken); 
    console.log(moveOption1);
    console.log(moveOption2);
    console.log(currentSpace);

};





// function getClass (e) {
//     let blah = e.target.getAttribute("class");
//     console.log(blah);
// }


// function locationTest (e) {
//     currentSpace = e.target.parentElement.getAttribute("data-cell-index");
//     console.log(currentSpace);
// }