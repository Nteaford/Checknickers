/*----- app's state (variables) -----*/
let playerTurn, currentSelection, currentSpace, checkSpace, newSpace, jumpCheckSpace, enemySquare1, enemySquare2, enemySquare3, enemySquare4, moveOption1, moveOption2, moveOption3, moveOption4, tokenTeamSelected, tokenRankSelected, tokenId;


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

function init() {
    playerTurn = blkTurnLookup;
    currentSpace = 0;

    gameState = ["", "red--token", "", "red--token", "", "red--token", "", "red--token", "red--token", "", "red--token", "", "red--token", "", "red--token", "", "", "red--token", "", "red--token", "", "red--token", "", "red--token", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "black--token", "", "black--token", "", "black--token", "", "black--token", "", "", "black--token", "", "black--token", "", "black--token", "", "black--token", "black--token", "", "black--token", "", "black--token", "", "black--token", ""];

};




function moveCalculator(e) {
    //reset checkerboard squares to grey
    let yellowClear = document.querySelectorAll(".potentialMove");
    yellowClear.forEach(checkerbox => checkerbox.classList.remove("potentialMove"));
    //set current token type
    tokenRankSelected = tokenTypeLookup(e);
    //confirm that this token is allowed to move
    tokenTeamSelected = tokenTeamLookup(e);
    //set currentSpace variable
    currentSpace = parseInt(currentSpace = e.target.parentElement.getAttribute("id"));
    //set checkSpace variable;
    checkSpace = currentSpace;

    //collect tokenId
    tokenId = e.target.getAttribute(("id"));
    // console.log(tokenId);

    //create moveLookup Object
    let moveLookup = moveLookupFunction(checkSpace);

    //Player Turn Check
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

    //Jump Checking

    jumpCheck();

    function jumpCheck() {
        if (gameState[moveOption1] === playerTurn.opponentToken) {
            console.log(`This is checkSpace ${checkSpace}`);
            enemySquare1 = moveOption1;
            checkSpace = moveOption1;

            moveLookup = moveLookupFunction(checkSpace);

            jumpCheckSpace = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption1;

            if (gameState[jumpCheckSpace] !== "") {
                moveOption1 = null;
            } else {
                moveOption1 = jumpCheckSpace;
            }
        };
        if (gameState[moveOption2] === playerTurn.opponentToken) {
            console.log(`This is checkSpace ${checkSpace}`);
            enemySquare2 = moveOption2;
            checkSpace = moveOption2;

            moveLookup = moveLookupFunction(checkSpace);

            jumpCheckSpace = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption2;

            if (gameState[jumpCheckSpace] !== "") {
                moveOption2 = null;
            } else {
                moveOption2 = jumpCheckSpace;
            }
        };
        if (gameState[moveOption3] === playerTurn.opponentToken) {
            console.log(`This is checkSpace ${checkSpace}`);
            enemySquare3 = moveOption3;
            checkSpace = moveOption3;

            moveLookup = moveLookupFunction(checkSpace);

            jumpCheckSpace = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption3;

            if (gameState[jumpCheckSpace] !== "") {
                moveOption3 = null;
            } else {
                moveOption3 = jumpCheckSpace;
            }
        };
        if (gameState[moveOption4] === playerTurn.opponentToken) {
            console.log(`This is checkSpace ${checkSpace}`);
            enemySquare4 = moveOption4;
            checkSpace = moveOption4;

            moveLookup = moveLookupFunction(checkSpace);

            jumpCheckSpace = moveLookup[tokenTeamSelected][tokenRankSelected].moveOption4;

            if (gameState[jumpCheckSpace] !== "") {
                moveOption4 = null;
            } else {
                moveOption4 = jumpCheckSpace;
            }
        };
    };
    // console.log(`This is checkSpace ${checkSpace}`);
    // console.log(`This is moveOption1 ${moveOption1}`);

    // console.log(`This is jumpCheckSpace ${jumpCheckSpace}`);

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

    //Board Block Check
    if (moveOption1 < 0 || moveOption1 > 63) {
        moveOption1 = null;
    };
    if (moveOption2 < 0 || moveOption2 > 63) {
        moveOption2 = null;
    };
    if (moveOption3 < 0 || moveOption3 > 63) {
        moveOption3 = null;
    };
    if (moveOption4 < 0 || moveOption4 > 63) {
        moveOption4 = null;
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

function tokenTypeLookup(e) {
    let tokenRankHalfway = e.target.getAttribute("class");
    tokenRankHalfway = tokenRankHalfway.split(" ");
    return tokenRank = tokenRankHalfway[1];
    // console.log(tokenRank);
}

function tokenTeamLookup(e) {
    let tokenTeamHalfway = e.target.getAttribute("class");
    tokenTeamHalfway = tokenTeamHalfway.split(" ");
    return tokenTeam = tokenTeamHalfway[0];
    // console.log(tokenRank);

}

function moveLookupFunction(checkSpace) {
    const moveLookup = {
        "black--token": {
            soldier: {
                moveOption1: (checkSpace - 9),
                moveOption2: (checkSpace - 7),
                moveOption3: null,
                moveOption4: null,
                restrictedSquares: {
                    8: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    23: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    24: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    39: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    40: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    55: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    56: {
                        moveOption1: null,
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

                    7: {
                        moveOption1: null,
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    8: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: (checkSpace + 9),
                        moveOption4: null,
                    },
                    23: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    24: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: (checkSpace + 9),
                        moveOption4: null,
                    },
                    39: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    40: {
                        moveOption1: null,
                        moveOption2: (checkSpace - 7),
                        moveOption3: (checkSpace + 9),
                        moveOption4: null,
                    },
                    55: {
                        moveOption1: (checkSpace - 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace + 7),
                    },
                    56: {
                        moveOption1: null,
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
                    8: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    23: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    24: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    39: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    40: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: null,
                    },
                    55: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    56: {
                        moveOption1: (checkSpace + 9),
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

                    7: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: null,
                        moveOption4: null,
                    },
                    8: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace - 7),
                    },
                    23: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: (checkSpace - 9),
                        moveOption4: null,
                    },
                    24: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace - 7),
                    },
                    39: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: (checkSpace - 9),
                        moveOption4: null,
                    },
                    40: {
                        moveOption1: (checkSpace + 9),
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace - 7),
                    },
                    55: {
                        moveOption1: null,
                        moveOption2: (checkSpace + 7),
                        moveOption3: (checkSpace - 9),
                        moveOption4: null,
                    },
                    56: {
                        moveOption1: null,
                        moveOption2: null,
                        moveOption3: null,
                        moveOption4: (checkSpace - 7),
                    },
                },
            },
        },
    }
    return moveLookup;
}


function moveToken(e) {
    if (e.target.tagName === "P") return;
    if (tokenTeam !== playerTurn.tokenUsed)
        return;

    let movingToken = currentSpace;
    console.log(e.target.id);

    let oldSpaceDom = document.getElementById(tokenId);

    console.log(oldSpaceDom);
    oldSpaceDom.remove(document.querySelector(tokenId));
    gameState[currentSpace] = "";





    let newSpaceDom = document.createElement("p");
    newSpaceDom.classList.add(tokenTeamSelected, tokenRankSelected);
    newSpaceDom.setAttribute("id", tokenId);

    let newSpaceDomLocator = e.target;

    newSpaceDomLocator.appendChild(newSpaceDom);

    newSpace = parseInt(e.target.id);
    gameState[newSpace] = playerTurn.tokenUsed;

    console.log(newSpace);
    console.log(jumpCheckSpace);
    console.log(enemySquare1);

//Removal of jumped piece
    if ((newSpace === jumpCheckSpace) && (newSpace === moveOption1)) {
        let enemySquare1Fix = enemySquare1.toString();
        console.log(enemySquare1Fix);
        let enemySpaceDom = document.getElementById(enemySquare1Fix);
        enemySpaceDom.removeChild(enemySpaceDom.lastChild);
        console.log(enemySpaceDom.childNodes);
        gameState[enemySquare1] = "";
    }
    else if ((newSpace === jumpCheckSpace) && (newSpace === moveOption2)) {
        let enemySquare2Fix = enemySquare2.toString();
        console.log(enemySquare2Fix);
        let enemySpaceDom = document.getElementById(enemySquare2Fix);
        enemySpaceDom.removeChild(enemySpaceDom.lastChild);
        console.log(enemySpaceDom.childNodes);
        gameState[enemySquare2] = "";
    }
    else if ((newSpace === jumpCheckSpace) && (newSpace === moveOption3)) {
        let enemySquare3Fix = enemySquare3.toString();
        console.log(enemySquare3Fix);
        let enemySpaceDom = document.getElementById(enemySquare3Fix);
        enemySpaceDom.removeChild(enemySpaceDom.lastChild);
        console.log(enemySpaceDom.childNodes);
        gameState[enemySquare3] = "";
    }
    else if ((newSpace === jumpCheckSpace) && (newSpace === moveOption4)) {
        let enemySquare4Fix = enemySquare4.toString();
        console.log(enemySquare4Fix);
        let enemySpaceDom = document.getElementById(enemySquare4Fix);
        enemySpaceDom.removeChild(enemySpaceDom.lastChild);
        console.log(enemySpaceDom.childNodes);
        gameState[enemySquare4] = "";


    // let enemySquare2Fix = enemySquare2.toString();
    // console.log(enemySquare2Fix);
    // let enemySpaceDom = document.getElementById(enemySquare2Fix);
    // enemySpaceDom.removeChild(enemySpaceDom.firstChild);
    // console.log(enemySpaceDom.childNodes);
    // gameState[enemySquare2] = "";

    // let enemySquare1Fix = enemySquare3.toString();
    // console.log(enemySquare3Fix);
    // let enemySpaceDom = document.getElementById(enemySquare3Fix);
    // enemySpaceDom.removeChild(enemySpaceDom.firstChild);
    // console.log(enemySpaceDom.childNodes);
    // gameState[enemySquare3] = "";

    // let enemySquare4Fix = enemySquare4.toString();
    // console.log(enemySquare1Fix);
    // let enemySpaceDom = document.getElementById(enemySquare4Fix);
    // enemySpaceDom.removeChild(enemySpaceDom.firstChild);
    // console.log(enemySpaceDom.childNodes);
    // gameState[enemySquare4] = "";
};




if (playerTurn === blkTurnLookup) { playerTurn = redTurnLookup } else {
    playerTurn = blkTurnLookup
};

// tokenTrackingReset();

const moveEventRemove = document.querySelectorAll(".potentialMove");
for (let i = 0; i < moveEventRemove.length; i++) {
    moveEventRemove[i].removeEventListener("click", moveToken)
};


};


function tokenTrackingReset() {
    tokenRankSelected = "";
    tokenTeamSelected = "";
    currentSpace = "";
    enemySquare1 - "";
    enemySquare2 - "";
    enemySquare3 - "";
    enemySquare4 - "";
    checkSpace = currentSpace;
    tokenId = "";
    moveOption1 = "";
    moveOption2 = "";
    moveOption3 = "";
    moveOption4 = "";

}


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
