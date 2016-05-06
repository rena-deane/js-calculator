// equal
var getSum = document.getElementById('sum');
getSum.addEventListener("click", function(){
     var sum = document.getElementById('solutionID').value;
     var sumReturn = eval(sum);
     document.getElementById('solutionID').value = sumReturn;
  });

// multiply
var getMultiply = document.getElementById('multiply');
getMultiply.addEventListener("click", function(){
    document.getElementById('solutionID').value += "*";
  });

// divide
var getDivide = document.getElementById('divide');
getDivide.addEventListener("click", function(){
    document.getElementById('solutionID').value += "/";
  });

// minus
var getMinus = document.getElementById('minus');
getMinus.addEventListener("click", function(){
    document.getElementById('solutionID').value += "-";
  });

// +
var getAddition = document.getElementById('addition');
getAddition.addEventListener("click", function(){
    document.getElementById('solutionID').value += "+";
  });

// Zero
var getZero = document.getElementById('zero');
getZero.addEventListener("click", function(){
    document.getElementById('solutionID').value += 0;
  });

// one
var getOne = document.getElementById('one');
getOne.addEventListener("click", function(){
    document.getElementById('solutionID').value += 1;
  });

// two
var getTwo = document.getElementById('two');
getTwo.addEventListener("click", function(){
    document.getElementById('solutionID').value += 2;
  });

// three
var getThree = document.getElementById('three');
getThree.addEventListener("click", function(){
    document.getElementById('solutionID').value += 3;
  });

// four
var getFour = document.getElementById('four');
getFour.addEventListener("click", function(){
    document.getElementById('solutionID').value += 4;
  });

// five
var getFive = document.getElementById('five');
getFive.addEventListener("click", function(){
    document.getElementById('solutionID').value += 5;
  });

// six
var getSix = document.getElementById('six');
getSix.addEventListener("click", function(){
    document.getElementById('solutionID').value += 6;
  });

// seven
var getSeven = document.getElementById('seven');
getSeven.addEventListener("click", function(){
    document.getElementById('solutionID').value += 7;
  });

// eight
var getEight = document.getElementById('eight');
getEight.addEventListener("click", function(){
    document.getElementById('solutionID').value += 8;
  });

// nine
var getNine = document.getElementById('nine');
getNine.addEventListener("click", function(){
    document.getElementById('solutionID').value += 9;
  });

// CE ClearEntry
var getCE = document.getElementById('clearEntry');
getCE.addEventListener("click", function(){
    var str = document.getElementById('solutionID').value;
    var slicedNo = str.slice(0,-1);
    document.getElementById('solutionID').value = slicedNo;
    });

// AC allClear
var getAC = document.getElementById('allClear');
getAC.addEventListener("click", function(){
    document.getElementById('solutionID').value = "";
  });

