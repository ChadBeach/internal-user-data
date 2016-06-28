var sayHi = function (name) {
  console.log("hello there, " + name);
};

//console.log("hangman is just a game");
//sayHi("Chad");

var turnsleft = function () {
var element = document.getElementById('turn-count')
  return element.textcontent;
};

var guesses[];
var wordlist [
  "cookies", "elephant", "donut", "dodge", "transport", "recursion", "agriculture",
  "espresso" "computer", "transmorgify",
];

var randomItem= finction (items) {
var index = Math.floor(Math.random() * items.length);
return items[index];

}

var answer = randomItem(wordlist);
consol.log("The magic word is " + answer);


var removeGuess = function (e) {
  console.log(e);
};

var bumpCount = function (e) {
  console.log(e);
};

var el = document.querySelector("#turncount")
el.addeventListner('click', function (e) {
  target = e.traget;
});
