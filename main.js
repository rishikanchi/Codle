"use strict";
//Everything uses querySelector.

//Console logs both width and height of screen.
function screenWidthHeight(){
    console.log("Screen Width: " + window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth)
    console.log("Screen Height: " + window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight)
}
//Returns screen width of screen.
function screenWidth(){
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
}
//Returns screen height of screen.
function screenHeight(){
    return window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight
}
//Takes px and converts to viewport.
//Make sure widthOrHeight has a paramter of true or false
function convertPXToVP(px, widthTrue){
    if (widthTrue){
        return px * 100 / document.documentElement.clientWidth;
    }
    else{
        return px * 100 / document.documentElement.clientHeight;
    }
}
//Takes viewport and converts to px.
//Make sure widthOrHeight has a paramter of true or false
function convertVPToPX(viewport, widthTrue){
    if (widthTrue){
        return document.documentElement.clientWidth * viewport / 100;
    }
    else{
        return document.documentElement.clientHeight * viewport / 100;
    }
}

//https://www.geeksforgeeks.org/convert-base-decimal-vice-versa/ Up To infinite bases technically
//https://javascript.plainenglish.io/number-base-conversion-in-javascript-8bc44219b4ab
//https://medium.com/@krishnaregmi/base-conversion-in-javascript-5ab6c6ad0b04
//32 base is the max of this function
function anyBaseConvertor(string, originalBase, convertedBase){
    const base10String=parseInt(string, originalBase)
    return base10String.toString(convertedBase)
}

function CaesarCipher(key, message, encryptOrDecrypt){
    message=message.split("")

    let encryptedMessage=""
    for (let i=0; i<message.length; i++){
        if ((/[a-zA-Z]/).test(message[i])){
            message[i]=message[i].toLowerCase()
            message[i]=message[i].charCodeAt()
            if (encryptOrDecrypt){
                message[i]=parseInt(message[i])+parseInt(key)
                if (message[i]>122){
                    message[i]=message[i]-26
                }
                message[i]=String.fromCharCode(message[i])
                message[i]=message[i].toUpperCase()
            }
            else{
                message[i]=parseInt(message[i])-parseInt(key)
                if (message[i]<97){
                    message[i]=message[i]+26
                }
                message[i]=String.fromCharCode(message[i])
            }
        }
        encryptedMessage+=message[i]
    }

    return encryptedMessage
}

function vigenèreCipher(key,message, encryptOrDecrypt, strictVigenère){
    let encryptedMessage=""
    
    //checks for whitespace
    if (/\S/.test(key)){
        message=message.split("")
        key=key.split("")

        for (let i=0; i<message.length; i++){
            let encryptionKey=key[i%key.length]
            if ((/[a-zA-Z]/).test(encryptionKey)){
                encryptionKey=encryptionKey.toLowerCase()
                encryptionKey=encryptionKey.charCodeAt()
                encryptionKey-=97
                encryptedMessage+=CaesarCipher(encryptionKey,message[i], encryptOrDecrypt)
            }
            else if (!strictVigenère){
                encryptedMessage+=CaesarCipher(encryptionKey,message[i], encryptOrDecrypt)
            }
        }
    }
    return encryptedMessage
}

//Take a min and max and will return a random number inbetween including the min and max.
function randomInt(min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    let FinalMath=""
    if (min<0 || max<0){
        FinalMath=Math.ceil(Math.random()*(max-min-1))+min;
    }
    else {
        FinalMath=Math.floor(Math.random()*(max-min+1))+min
    }
    return FinalMath;
}

//It takes the image form the uploaded image area and puts it in the end image area.
function uploadImage(uploadedImageArea, endImageArea){
    var file=document.querySelector(uploadedImageArea).files[0] 
    if (file){
        var filereader=new FileReader();
        filereader.readAsDataURL(file)
        filereader.addEventListener("load", function(){
            img='<img src='+filereader.result+'>'
            document.querySelector(endImageArea).innerHTML=img
        }, false);
    }
}

//Takes input and checks if integer or not.
function checkIfInt(input){
    if (isNaN(input)){
        return false
    }
    else{
        return false
    }
}

//It send you to a different file.
function send(file){
    window.location.href=file
}

//It changes with of an item, useful for sidebar.
function changeWidth(item, howMuch) {
    document.querySelector(item).style.width = howMuch;
}

/*
Don't Understand but heplpful
*/

//Mr.Grattoni it is used in funWithFilter project. It is used to download an image.
function download() {
    // create an html link, <a href=""> 

    var link = document.createElement('a');

    // get the current time in millisecond-UNIX time (milliseconds since 1970)
    var timestamp = new Date().getTime();

    // name the file imageTIMESTAMP.png where TIMESTAMP is the current UNIX millisecond time
    link.download = 'image' + timestamp + '.png';
    
    // write out the filtered image data as imageTIMESTAMP.png 
    link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    link.click();
}

/*
CSS Snippets:
//You can use the changeWidth function to make it a sidebar
//Main\style.css
.sidebar {
    height: 100vh;
    position: fixed;
    width: 0;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s;
    box-shadow: .260416vw 0px .52083vw grey;
}
*/

/*
Useful JS Functions:
string.split("cutSection") splits the string into an array where there are the cur section. If there is no cut section, it cuts every single line.

Regex is used to match
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

string.toLowerCase are used to make string upper or lower case.
string.toUpperCase are used to make string upper or lower case.

string.charCodeAt() is used to make string into charCode or ASCII
String.fromCharCode(string) is used to convert the string from charCode or Ascii to normal letters

string.toString(base) converts any base 10 number to another base
parseInt(string, base) The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN. If you add the base paremeter option then it converts the string from any base to base 10.

context.getImageData(x, y, imageObj.width, imageObj.height) Get data of an image to edit it.

timestamp = new Date().getTime(); Gives you the current time in timestamp. TIMESTAMP is the current UNIX millisecond time.
*/

/*
Useful CSS Function:
Css selectors
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

Display
https://www.w3schools.com/cssref/pr_class_display.asp

Position
https://www.w3schools.com/css/css_positioning.asp

Grid
https://css-tricks.com/snippets/css/complete-guide-grid/

Flex
https://developer.mozilla.org/en-US/docs/Web/CSS/flex
*/


/*
Still Need To Work On
*/


//It takes an int and checkes if RGB
function checkIfRGB(isInt, redHex, greenHex, blueHex,){
    input=String(input).split(",")
    console.log(input)
    if (input.length!==3){
        console.log("You must have 3 number seperated by 2 commas.")
    }
    else{
        for (var i=0; i<input.length; i++){
            var curLetter=parseFloat(input[i])
            if (0>curLetter || curLetter>255){
                console.log("You can only have a digit between 1-255 within each comma.")
            }
            else{
                const hexString=convertRgbToHex(input[0], input[1], input[2])
                console.log("The rgb-value of this color is rgb("+input[0]+", "+input[1]+", "+input[2]+") and the hex-value of this color is "+hexString+".")
                return "("+input[0]+", "+input[1]+", "+input[2]+")"
            }
        }
    }
}
function convertRgbToHex(redHex, greenHex, blueHex, oppositeHex=false){
    const oppositeRedHex=anyBaseConvertor(-redHex+255, 10, 16)
    const oppositeGreenHex=anyBaseConvertor(-greenHex+255, 10, 16)
    const oppositeBlueHex=anyBaseConvertor(-blueHex+255, 10, 16)

    redHex=anyBaseConvertor(redHex, 10, 16)
    greenHex=anyBaseConvertor(greenHex, 10, 16)
    blueHex=anyBaseConvertor(blueHex, 10, 16)
    const hexString="#"+redHex+greenHex+blueHex;
    const wordHexString="#"+oppositeRedHex+oppositeGreenHex+oppositeBlueHex;
    if (oppositeHex){
        return wordHexString
    }
    else{
        return hexString
    }
}
function convertIntToHex(string, oppositeHex=false){

    oppositeRedHex=anyBaseConvertor(-redHex+255, 10, 16)
    oppositeGreenHex=anyBaseConvertor(-greenHex+255, 10, 16)
    oppositeBlueHex=anyBaseConvertor(-blueHex+255, 10, 16)

    redHex=anyBaseConvertor(redHex, 10, 16)
    greenHex=anyBaseConvertor(greenHex, 10, 16)
    blueHex=anyBaseConvertor(blueHex, 10, 16)
    const hexString="#"+redHex+greenHex+blueHex;
    const wordHexString="#"+oppositeRedHex+oppositeGreenHex+oppositeBlueHex;
    if (oppositeHex){
        return wordHexString
    }
    else{
        return hexString
    }
}



//It makes the texbox larger to fit what is inside.
//If you want minum to be in vw use 
function responsiveTextboxInPX(textbox, minimum){
    document.querySelector(textbox).style.height = 'auto'
    let height=document.querySelector("#output").scrollHeight
    console.log(height)
    console.log(minimum)
    if (height<minimum){
        height=minimum
    }
    height+="px"
    document.querySelector(textbox).style.height = height
}
function repsonsiveTextboxInPX(textbox){
    let span = document.createElement("span");
    span.innerHTML=document.querySelector(textbox).value
    console.log(document.querySelector(textbox).value)
    console.log(span)
    console.log(span.offsetHeight)
    span.appendChild(document.querySelector('#instruction'))
    return span.offsetHeight
}