"use strict";
//elemnt.setAttribute("contenteditable", trueOrFalse)
//We could add the tables through js?
//Make everything cpatalized

let row = 1;
const wordBank = ["ALIGN","ARRAY", "ASCII", "BASES", "BLOCK", "BYTES", "CLASS","CODER", "CODES", "COLOR", "COLOR","CONST", "DEBUG", "DIGIT", "EVENT", "EVENT", "FALSE", "FETCH", "FILES", "FLOAT", "FONTS", "FORUM", "HACKS", "HTTPS", "IMAGE", "INDEX", "INPUT", "INTEL", "LISTS", "LOOPS", "LOSSY", "MATCH", "MODEM", "NODES", "PATHS", "PIXEL", "PRINT", "REACT", "REGEX", "ROUND", "SCALA", "SHIFT", "SIZES", "SLICE", "SPLIT", "STYLE", "SWIFT", "TABLE", "TITLE", "UNITY", "VALUE", "VIRUS", "WIDTH", "WIRED"];
const todayArray = wordBank[0].split("");
const todayDuplicates = findDuplicates(todayArray);

function submit(){
    //creates string guessWord from user input guess
    let guessWord = [];
    //gets the guessed word
    for (let i=1; i<6; i++){
        const curId = String(row) + String(i);
        if (document.getElementById(curId).innerText.trim()!==""){
            guessWord.splice(guessWord.length, 0, document.getElementById(curId).innerText);
        }
        else{
            break;
        }
    }

    //This means that there are no blank charcters
    if (guessWord.length==5){
        if (wordBank.includes(guessWord.join(""))){
            checkCorrect(guessWord)
            row+=1
        }
        else{
            alert("Word Doesn't Exist")
        }
    }
    else{
        alert("There are not 5 characters.")
    }
}

//currentguess will be changed
function checkCorrect(currentGuess){
    for (var i = 0; i < 5; i++){
        const curId = String(row) + String(i+1);
        currentGuess[i]=currentGuess[i].toUpperCase();
        if(currentGuess[i] == todayArray[i]){
            document.getElementById(curId).style.backgroundColor="green";
            document.getElementById(currentGuess[i]).style.backgroundColor="green"
        }
        else if(todayArray.includes(currentGuess[i])){
            console.log(i)
            console.log(currentGuess[i])
            console.log(todayArray)
            document.getElementById(curId).style.backgroundColor="grey";
            document.getElementById(currentGuess[i]).style.backgroundColor="grey"
        }
        else{
            document.getElementById(curId).style.backgroundColor="yellow";
            document.getElementById(currentGuess[i]).style.backgroundColor="yellow"
        }
    }
}

function cool(){
    console.log("not charan")
}

function letterRec(letter){
    for (let i=1; i<6; i++){
        const curId = String(row) + String(i);
        if (document.getElementById(curId).innerText.trim("")==""){
            document.getElementById(curId).innerText=letter
            return
        }
    }
}

function BackspaceRec(){
    for (let i=5; i>0; i--){
        const curId = String(row) + String(i);
        console.log(curId)
        if (document.getElementById(curId).innerText.trim("")!==""){
            document.getElementById(curId).innerText=""
            return
        }
    }
}

function findDuplicates(array){
    const inBetween = array => array.filter((item, index) => array.indexOf(item) !== index)
    var duplicateElement = inBetween(array);

    if (duplicateElement.length == 0){
        return "null";
    }

    else {
        duplicateElement = [duplicateElement[0]];
        for (let i=0; i<array.length; i++){
            if (array[i] == duplicateElement[0]){
                console.log(duplicateElement);
                duplicateElement.push(i);
            }
        }
        return duplicateElement;
    }
}

function toggleInstructions(){
    var x = document.getElementById("instructions");
    if (x.innerHTML === "") {
      x.innerHTML = "Try to guess a 5-letter that is related to code!";
    } else {
      x.innerHTML = "";
    }
}
