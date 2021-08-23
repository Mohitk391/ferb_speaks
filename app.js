var inputText = document.querySelector("#textInput");
var outputText = document.querySelector("#textOutput");
var buttonTranslate = document.querySelector("#btnTranslate");

var URL = "https://api.funtranslations.com/translate/ferb-latin.json";

function convertedURL(text)
{
    return (URL + "?" + "text=" + text);
}
function errorHandler(error){
    alert("There's something wrong with the site, please check again after sometime.");
    return ("error is: "+error);
}

function clickEventHandler() {
    fetch(convertedURL(inputText.value))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;})
        .catch(errorHandler);
}

buttonTranslate.addEventListener("click",clickEventHandler);