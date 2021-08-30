var userInput = document.querySelector("#inputText");
var userOutput = document.querySelector("#outputText");
var btn = document.querySelector("#translateBtn")

var serverURL = "	https://api.funtranslations.com/translate/shakespeare.json";

function constructURL(text){
  return serverURL + "?text=" + text ;
}

function errorHandler(){
       console.log("error occured",error)
       alert("Server Problem! Please Try Again")
}

function clickHandler(){
    var userText = userInput.value;
    fetch(constructURL(userText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        userOutput.innerText = translatedText;
    })
    }

btn.addEventListener("click", clickHandler);
