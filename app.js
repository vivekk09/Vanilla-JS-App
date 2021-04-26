var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output_text = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
  output_text.innerText = "asdddand" + txtInput.value;
});
