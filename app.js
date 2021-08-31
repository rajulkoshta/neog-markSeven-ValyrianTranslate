var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function errorHandler(error){
       console.log("error Occured");
       alert("something went wrong with the server Try again later ........")
}

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}


function eventHandler(){
    var inputText = inputTxt.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var TranslatedText = json.contents.translated;
        outputDiv.innerText = TranslatedText;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",eventHandler);