var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output_text = document.querySelector("#output");
var ourURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text) {
  return (
    //"https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" +
    ourURL + "?" + "text=" + text
  );
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with the server, please try again!");
}

btnTranslate.addEventListener("click", function clickEventHandler() {
  // output_text.innerText = "asdddand" + txtInput.value;
  fetch(translateURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output_text.innerText = translatedText;
    })
    .catch(errorHandler);
});
