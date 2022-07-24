var num = document.querySelectorAll("#num");
var operator = document.querySelectorAll("#operator");
var screen = document.querySelector("#screen");
var clearAll = document.querySelector('#clearAll');
var dot = document.querySelector('#dot');

var opt = "";
var optState = false;
var result = 0;

num.forEach((number) => {
  number.addEventListener("click", showNumber);

  function showNumber() {
    if (screen.textContent == "0" || optState) {
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;
  }
});

operator.forEach((e) => {
  e.addEventListener("click", clickOpt);

  function clickOpt() {
    optState = true;
    var newOpt = this.textContent;

    switch (opt) {
      case "+":
        screen.textContent = result + Number(screen.textContent);
        break;
      case "-":
        screen.textContent = result - Number(screen.textContent);
        break;
      case "*":
        screen.textContent = result * Number(screen.textContent);
        break;
      case "/":
        screen.textContent = result / Number(screen.textContent);
        break;
      case "=":
        result = Number(screen.textContent);
        break;
    }
    result = Number(screen.textContent);
    opt = newOpt;
  }
});

clearAll.addEventListener('click', function(){
    screen.textContent = 0;
    opt = "";
    optState = false;
    result = 0;
});

dot.addEventListener('click', function(e){
    screen.textContent += '.';
});
