"use strict";
//elemnt.setAttribute("contenteditable", trueOrFalse)

let row = 1;
const wordBank = ["ALIGN","ARRAY", "ASCII", "BASES", "BLOCK", "BYTES", "CLASS","CODER", "CODES", "COLOR", "COLOR","CONST", "DEBUG", "DIGIT", "EVENT", "EVENT", "FALSE", "FETCH", "FILES", "FLOAT", "FONTS", "FORUM", "HACKS", "HTTPS", "IMAGE", "INDEX", "INPUT", "INTEL", "LISTS", "LOOPS", "LOSSY", "MATCH", "MODEM", "NODES", "PATHS", "PIXEL", "PRINT", "REACT", "REGEX", "ROUND", "SCALA", "SHIFT", "SIZES", "SLICE", "SPLIT", "STYLE", "SWIFT", "TABLE", "TITLE", "UNITY", "VALUE", "VIRUS", "WIDTH", "WIRED"];
const todayArray = wordBank[1].split("");


function submit(){
    //creates string guessWord from user input guess
    let guessWord = "";
    //gets the guessed word
    for (let i=1; i<6; i++){
        guessWord += getText(row, i);
    }

    //checks if word is correct
    checkCorrect(guessWord)
}

function getText(row, column){
    let curId = String(row) + String(column);
    return document.getElementById(curId).innerText;
}


//currentguess will be changed
function checkCorrect(currentGuess){
    let curId = String(row) + String(i+1);
    for (var i = 0; i < 5;i++){
        if(currentGuess[i] = todayArray[i]){
            document.getElementById(curId).style+="background-color: green;"
        }
        else if(wordBank.includes(guessWord)){
            document.getElementById(curId).style+="background-color: yellow;"
        }
        else {
            document.getElementById(curId).style+="background-color: grey;"
        }
    }
}

/*Things to do:
display the list of incorrect letters
display the list of correct letters
add an instructions page
make a refresh word button


*/
