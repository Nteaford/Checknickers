/*----- app's state (variables) -----*/
let playerTurn, currentSelection, currentSpace, checkSpace, jumpCheckSpace, moveOption1, moveOption2, moveOption3, moveOption4, tokenTeamSelected, tokenRankSelected, tokenId;


/*----- constants -----*/
let gameState = [];
const blkTurnLookup = {
    tokenUsed: "black--token",
    opponentToken: "red--token",
}

const redTurnLookup = {
    tokenUsed: "red--token",
    opponentToken: "black--token",
}




/*----- cached element references -----*/



/*----- event listeners -----*/
document.querySelector(".game--container").addEventListener('click', moveCalculator);




/*----- functions -----*/

init();

function init () {
    playerTurn = blkTurnLookup;
    currentSpace = 0;

    gameState = ["","red--token","","red--token","","red--token","","red--token","red--token","","red--token","","red--token","","red--token","","","red--token","","red--token","","red--token","","red--token","","","","","","","","","","","","","","","","","black--token","","black--token","","black--token","","black--token","","","black--token","","black--token","","black--token","","black--token","black--token","","black--token","","black--token","","black--token",""];
        
};
    


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
    //set checkSpace variable;
    checkSpace = currentSpace;

    //collect tokenId
    tokenId = (tokenId = e.target.getAttribute(("id")));
    console.log(tokenId);
    
    
    const moveLookup = {
        "black--token": {
            soldier: {
                moveOption1: (checkSpace - 9),
                moveOption2: (checkSpace - 7),
                moveOption3: null,
                moveOption4: null,
                restrictedSquares: {
                    8: { moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: null,
                        moveOption4: null,
                    },
                    23: { moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    24: { moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: null,
                        moveOption4: null,
                    },
                    39: { moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    40: { moveOption1: null, 
                        moveOption2: (checkSpace - 7),
                        moveOption3: null,
                        moveOption4: null, 
                    },
                    55: { moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    56: { moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: null,
                        moveOption4: null,
                    },
                },
            },
            king: {
                moveOption1: (checkSpace - 9),
                moveOption2: (checkSpace - 7),
                moveOption3: (checkSpace + 9),
                moveOption4: (checkSpace + 7),
                restrictedSquares: {
                    
                    7: { moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (checkSpace + 7), 
                    },
                    8: { moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: (checkSpace + 9), 
                        moveOption4: null, 
                    },
                    23: { moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    24: {moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: (checkSpace + 9), 
                        moveOption4: null, 
                    },
                    39: { moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    40: {moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: (checkSpace + 9), 
                        moveOption4: null,
                    },
                    55: {  moveOption1:(checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    56: {moveOption1: null, 
                        moveOption2: (checkSpace - 7), 
                        moveOption3: null, 
                        moveOption4: null, 
                    },
                },
            },
        },
        "red--token": {
            
            soldier: {
                moveOption1: (checkSpace + 9),
                moveOption2: (checkSpace + 7),
                moveOption3: null,
                moveOption4: null,
                restrictedSquares: {
                    8: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null,
                        moveOption4: null,
                    },
                    23: { moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    24: { moveOption1: (checkSpace + 9), 
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    39: { moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    40: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null,
                        moveOption4: null,
                    },
                    55: { moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    56: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null,
                        moveOption4: null,
                    },
                },
            },
            
            king: {
                moveOption1: (checkSpace - 9),
                moveOption2: (checkSpace - 7),
                moveOption3: (checkSpace + 9),
                moveOption4: (checkSpace + 7),
                restrictedSquares: {
                    
                    7: { moveOption1: null, 
                        moveOption2: (checkSpace + 7), 
                        moveOption3: null, 
                        moveOption4: null, 
                    },
                    8: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (checkSpace - 7), 
                    },
                    23: { moveOption1: null, 
                        moveOption2: (checkSpace + 7), 
                        moveOption3: (checkSpace - 9), 
                        moveOption4: null,
                    },
                    24: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (checkSpace - 7),  
                    },
                    39: { moveOption1: null, 
                        moveOption2: (checkSpace + 7), 
                        moveOption3: (checkSpace - 9), 
                        moveOption4:  null,
                    },
                    40: { moveOption1: (checkSpace + 9), 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (checkSpace - 7), 
                    },
                    55: { moveOption1: null, 
                        moveOption2: (checkSpace + 7), 
                        moveOption3: (checkSpace - 9), 
                        moveOption4: null,
                    },
                    56: {moveOption1: null, 
                        moveOption2: null, 
                        moveOption3: null, 
                        moveOption4: (checkSpace - 7),  
                    },
                },
            },
        },
    }
    
    if (tokenTeamSelected !== playerTurn.tokenUsed) {
        return;
    };

    //determine moveOptions
    moveOption1 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption1;
    moveOption2 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption2;
    moveOption3 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption3;
    moveOption4 = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption4;
    // console.log(`MC: you are at ${checkSpace}`);
    // console.log(`MC: you can move to ${moveOption1}`);
    // console.log(`MC: you can move2 to ${moveOption2}`);
    // console.log(`MC: you can move3 to ${moveOption3}`);
    // console.log(`MC: you can move4 to ${moveOption4}`);
    // console.log(moveLookup[tokenTeamSelected][tokenRankSelected]);
    
    //determine movement restrictions
    let restrictedCheck = currentSpace;
    if (moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck]) {
        moveOption1 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption1;
        moveOption2 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption2;
        moveOption3 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption3;
        moveOption4 = moveLookup[tokenTeamSelected][tokenRankSelected].restrictedSquares[restrictedCheck].moveOption4;
        // console.log(`MC: updated move ${moveOption1}`);
        // console.log(`MC: updated move2 ${moveOption2}`);
        // console.log(`MC: updated move3 ${moveOption3}`);
        // console.log(`MC: updated move4 ${moveOption4}`);
    };
    
        
    //Jump Checking
    if (gameState[moveOption1] === playerTurn.opponentToken) {
        console.log(`This is checkSpace ${checkSpace}`);
        checkSpace = moveOption1;
        

        jumpCheckSpace = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption1;

        console.log(`This is moveOption1 ${moveOption1}`);

        console.log(`This is ${jumpCheckSpace}`);

    }

    //Team Block Check
    if (gameState[moveOption1] === playerTurn.tokenUsed) {
        moveOption1 = null;
    };
    if (gameState[moveOption2] === playerTurn.tokenUsed) {
        moveOption2 = null;
    };
    if (gameState[moveOption3] === playerTurn.tokenUsed) {
        moveOption1 = null;
    };
    if (gameState[moveOption4] === playerTurn.tokenUsed) {
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
    if (moveOption3 !== null) {
    let moveOption3Display = moveOption3.toString();
    document.getElementById(moveOption3Display).classList.add("potentialMove");
    };
    if (moveOption4 !== null) {
    let moveOption4Display = moveOption4.toString();
    document.getElementById(moveOption4Display).classList.add("potentialMove");
    };

    const moveSetup = document.querySelectorAll(".potentialMove");
        for (let i = 0; i < moveSetup.length; i++) {
            moveSetup[i].addEventListener("click", moveToken)
            };

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
    };
};

function moveToken (e) {
   let movingToken = currentSpace;
   console.log(e.target.id);
   
   let oldSpaceDom = document.getElementById(tokenId);
   
   console.log(oldSpaceDom);
   oldSpaceDom.remove(document.querySelector(tokenId));
   gameState[currentSpace] = "";
   
   let newSpaceDom = document.createElement("p");
   newSpaceDom.classList.add(tokenTeamSelected, tokenRankSelected);
   newSpaceDom.setAttribute("id",tokenId);
   
   let newSpaceDomLocator = e.target;
   
   newSpaceDomLocator.appendChild(newSpaceDom);
   
   let newSpace = e.target.id;
   gameState[newSpace] = playerTurn.tokenUsed;

   console.log(newSpaceDom);
    console.log(movingToken); 
    console.log(moveOption1);
    console.log(moveOption2);

};





// function getClass (e) {
//     let blah = e.target.getAttribute("class");
//     console.log(blah);
// }


// function locationTest (e) {
//     currentSpace = e.target.parentElement.getAttribute("data-cell-index");
//     console.log(currentSpace);
// }


// const moveCalcSetup = document.querySelectorAll(playerTurn.tokenUsed);
// for (let i = 0; i < moveCalcSetup.length; i++) {
//     moveCalcSetup[i].addEventListener("click", moveCalculator)
//     };
