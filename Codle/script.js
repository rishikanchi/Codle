"use strict";
//elemnt.setAttribute("contenteditable", trueOrFalse)

var row = 1;
const wordBank = ["ALIGN","ARRAY", "ASCII", "BASES", "BLOCK", "BYTES", "CLASS","CODER", "CODES", "COLOR", "COLOR","CONST", "DEBUG", "DIGIT", "EVENT", "EVENT", "FALSE", "FETCH", "FILES", "FLOAT", "FONTS", "FORUM", "HACKS", "HTTPS", "IMAGE", "INDEX", "INPUT", "INTEL", "LISTS", "LOOPS", "LOSSY", "MATCH", "MODEM", "NODES", "PATHS", "PIXEL", "PRINT", "REACT", "REGEX", "ROUND", "SCALA", "SHIFT", "SIZES", "SLICE", "SPLIT", "STYLE", "SWIFT", "TABLE", "TITLE", "UNITY", "VALUE", "VIRUS", "WIDTH", "WIRED"];
const todayArray = wordBank[1].split("");


function submit(){
    
    //creates string guessWord from user input guess
    var guessWord = "";
    //gets the guessed word
    for (let i=1; i<6; i++){
        guessWord += getText(row, i);
    }

    for (let i=0; i<5; i++){
        //checks if user guess is a word
        if (wordBank.includes(guessWord)){
            
            //sets curId to the 
            let curId = String(row) + String(i+1);
            //shows that the line was submitted
            document.getElementById(curId).style+="background-color: grey;"
            if (document.getElementById(curId).value == todayArray[i]){
                console.log("Checks words");
                document.getElementById(curId).style+="background-color: green;"
            }
            /*Checks if the character is equal too any of todayArray
            else if (document.getElementById(curId).value){
            document.getElementById(curId).style+="background-color: grey;"
            }
            */
            else{
                alert("Word is not in the word bank!");
            }
        }
    }
}

function getText(row, column){
    let curId = String(row) + String(column);
    return document.getElementById(curId).innerText;
}


//currentguess will be changed
function checkCorrect(currentGuess){
    for (var i = 0; i < 6;i++){
        if(currentGuess[i] = todayArray[i]){
            //set value of box to green
        }
    
        else if(wordBank.includes(guessWord)){
            //set box to yellow
        }
        
        else {
            //set box to grey
        }
    }
}

/*Things to do:
display the list of incorrect letters
display the list of correct letters
add an instructions page
make a refresh word button


*/