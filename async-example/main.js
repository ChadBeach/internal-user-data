var x = 0;

var input = document.querySelector("#value-1");

var addButton = document.querySelector(".add-button");

addButton.addEventListener('click', function (event) {
  event.preventDefault();

  var answer = document.querySelector(".answer");
  var result = Number(input.value) + x;
  console.log(result);
  answer.textContent = result;
  setTimeout(function () {
    x = result;
  }, 1000);
});
