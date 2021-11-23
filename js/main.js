/*----- app's state (variables) -----*/
let playerTurn, currentSelection, currentSpace, moveOption1, moveOption2, moveOption3, moveOption4, tokenTeamSelected, tokenRankSelected;


/*----- constants -----*/
const gameState = [];
    for (let i = 1; i <= 64; i++) {
    gameState.push("");
    }

    const blkTurnLookup = {
        tokenUsed: "black--token",
    }

    const redTurnLookup = {
        tokenUsed: "red--token",
    }

    
    
    
    /*----- cached element references -----*/
    
    
    
    /*----- event listeners -----*/
    document.querySelector(".game--container").addEventListener('click', moveCalculator);
    
    
    /*----- functions -----*/
    
    init();
    
    function init () {
        playerTurn = blkTurnLookup;
    currentSpace = 0;
}


function moveCalculator(e) {
    //set current token type
    tokenRankSelected = tokenTypeLookup(e);
    //confirm that this token is allowed to move
    tokenTeamSelected = turnCheck(e);
    //set currentSpace variable
    currentSpace = parseInt(currentSpace = e.target.parentElement.getAttribute("data-cell-index"));
    
    
    const moveLookup = {
        "black--token": {
            soldier: {
                moveOption1: (currentSpace - 9),
                moveOption2: (currentSpace - 7),
                restrictedSquares: {
                    9: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    24: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    25: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    40: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    41: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                    },
                    56: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                    },
                    57: { moveOption1: null, 
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
                    
                    8: { moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace + 7), 
                    },
                    9: { moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null, 
                    },
                    24: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    25: {moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null, 
                    },
                    40: { moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    41: {moveOption1: null, 
                        moveOption2: (currentSpace - 7), 
                        moveOption3: (currentSpace + 9), 
                        moveOption4: null,
                    },
                    56: {  moveOption1:(currentSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (currentSpace + 7),
                    },
                    57: {moveOption1: null, 
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
                    9: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    24: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    25: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    40: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    41: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                    },
                    56: { moveOption1: null,
                        moveOption2: (currentSpace + 7),
                    },
                    57: { moveOption1: (currentSpace + 9), 
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
                    
                    8: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: null, 
                        moveOption4: null, 
                    },
                    9: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7), 
                    },
                    24: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4: null,
                    },
                    25: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7),  
                    },
                    40: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4:  null,
                    },
                    41: { moveOption1: (currentSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7), 
                    },
                    56: { moveOption1: null, 
                        moveOption2: (currentSpace + 7), 
                        moveOption3: (currentSpace - 9), 
                        moveOption4: null,
                    },
                    57: {moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (currentSpace - 7),  
                    },
                },
            },
        },
    }
    
    //determine moveOptions
    moveOption1 = moveLookup[tokenTeamSelected][tokenRankSelected][moveOption1];
    moveOption2 = moveLookup[tokenTeamSelected][tokenRankSelected];
    console.log(typeof currentSpace);
    console.log(moveOption1);
    console.log(moveOption2);
    console.log(moveLookup[tokenTeamSelected][tokenRankSelected]);
    
    //determine movement restrictions
    // if (currentSpace = restrictedSquares[tokenTeamSelected][currentSpace]) {console.log(currentSpace)
    // // };
    // console.log(moveLookup[restrictedSquares][tokenTeamSelected][currentSpace]);
}

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
      } else  
      alert("Wait your turn!");
    };







// function getClass (e) {
//     let blah = e.target.getAttribute("class");
//     console.log(blah);
// }


// function locationTest (e) {
//     currentSpace = e.target.parentElement.getAttribute("data-cell-index");
//     console.log(currentSpace);
// }