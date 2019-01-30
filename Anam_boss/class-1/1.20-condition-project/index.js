var mess = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#result");

var bEvent = btn.addEventListener("click", function() {
  let valueGet = mess.value;
  let show = "";

  if (valueGet.match("sumon")) {
    show = "shairam pola";
  } else if (valueGet.match("mahfuz")) {
    show = " no comments were found";
  } else if (valueGet.match("rayhan")) {
    show = "wow person";
  } else {
    show = "result was not found";
  }

  result.innerHTML = `Ans: ${show}`;

  var language = new SpeechSynthesisUtterance(show);
  window.speechSynthesis.speak(language);
});