var btnattribute = document.querySelector("#btn");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("#output");
const url = "https://api.funtranslations.com/translate/sith.json";

function getURL(text) {
  return url + "?text=" + text;
}

function errorHandler(e) {
  alert("Server was breached!!!");
  console.log(e);
}

function clickHandler() {
  var input = inputText.value;
  var translateURL = getURL(input);
  fetch(translateURL)
    .then((res) => res.json())
    .then((json) => {
      var translated = json.contents.translated;
      outputText.innerText = translated;
    })
    .catch(errorHandler);
}

btnattribute.addEventListener("click", clickHandler);
