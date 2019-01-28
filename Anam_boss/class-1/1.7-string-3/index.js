var typeText = document.querySelector("#type-text");
var findText = document.querySelector("#find-text");
var result = document.querySelector("#result");

findText.addEventListener("keypress", function() {
  var match = typeText.value.indexOf(findText.value);
  if (match === -1) {
    result.innerHTML = `Oops: The value ${findText.value} was not found`;
  } else {
    result.innerHTML = `Wow: The value ${findText.value} was found at
    ${match}`;
  }
});
