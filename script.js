"use strict";
//elemnt.setAttribute("contenteditable", trueOrFalse)
//We could add the tables through js?
//Make everything cpatalized

let row = 1;
const wordBank = ["ALIGN","ARRAY", "ASCII", "BASES", "BLOCK", "BYTES", "CLASS","CODER", "CODES", "COLOR", "COLOR","CONST", "DEBUG", "DIGIT", "EVENT", "EVENT", "FALSE", "FETCH", "FILES", "FLOAT", "FONTS", "FORUM", "HACKS", "HTTPS", "IMAGE", "INDEX", "INPUT", "INTEL", "LISTS", "LOOPS", "LOSSY", "MATCH", "MODEM", "NODES", "PATHS", "PIXEL", "PRINT", "REACT", "REGEX", "ROUND", "SCALA", "SHIFT", "SIZES", "SLICE", "SPLIT", "STYLE", "SWIFT", "TABLE", "TITLE", "UNITY", "VALUE", "VIRUS", "WIDTH", "WIRED"];
const todayArray = wordBank[0].split("");


function submit(){
    //creates string guessWord from user input guess
    let guessWord = [];
    //gets the guessed word
    for (let i=1; i<6; i++){
        const curId = String(row) + String(i);
        guessWord.splice(guessWord.length, 0, document.getElementById(curId).innerText);
    }

    //checks if word is correct
    checkCorrect(guessWord)
    
    document.getElementById(`row${row}`).setAttribute("contenteditable", false)
    row+=1
    document.getElementById(`row${row}`).setAttribute("contenteditable", true)
}

//currentguess will be changed
function checkCorrect(currentGuess){
    for (var i = 0; i < 5; i++){
        const curId = String(row) + String(i+1);
        currentGuess[i]=currentGuess[i].toUpperCase()
        console.log(currentGuess[i])
        console.log(todayArray)
        if(currentGuess[i] == todayArray[i]){
            document.getElementById(curId).style.backgroundColor="green";
        }
        else if(todayArray.includes(currentGuess[i])){
            document.getElementById(curId).style.backgroundColor="yellow";
        }
        else {
            document.getElementById(curId).style.backgroundColor="grey";
        }
    }
}

/*Things to do:
display the list of incorrect letters
display the list of correct letters
add an instructions page
make a refresh word button


*/
