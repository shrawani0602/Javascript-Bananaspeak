var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverUrl = 	"https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text)
{
    return serverUrl + "?" +"text=" + text
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("something went wrong")
}

function clickEventHandler()
{
    //output.innerText = "fjrnknfkrnfk" + txtInput.value;
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
        {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;

        })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickEventHandler)
 