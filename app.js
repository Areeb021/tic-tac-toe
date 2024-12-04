var box1 = document.getElementById("0");
var box2 = document.getElementById("1");
var box3 = document.getElementById("2");
var box4 = document.getElementById("3");
var box5 = document.getElementById("4");
var box6 = document.getElementById("5");
var box7 = document.getElementById("6");
var box8 = document.getElementById("7");
var box9 = document.getElementById("8");

var count = 0;

function textShow() {
  var one="O";
  var two="X";
    if (count % 2 === 0) {
        return one;
    } else {
        return two;
    }
}

function reset() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
}

function game(number) {
    var text = textShow();

    if (number === 0 && box1.innerHTML === "") {
        box1.innerHTML = text;
        count++;
    } else if (number === 1 && box2.innerHTML === "") {
        box2.innerHTML = text;
        count++;
    } else if (number === 2 && box3.innerHTML === "") {
        box3.innerHTML = text;
        count++;
       
    } else if (number === 3 && box4.innerHTML === "") {
        box4.innerHTML = text;
        count++;
    } else if (number === 4 && box5.innerHTML === "") {
        box5.innerHTML = text;
        count++;
    } else if (number === 5 && box6.innerHTML === "") {
        box6.innerHTML = text;
        count++;
    } else if (number === 6 && box7.innerHTML === "") {
        box7.innerHTML = text;
        count++;
    } else if (number === 7 && box8.innerHTML === "") {
        box8.innerHTML = text;
        count++;
    } else if (number === 8 && box9.innerHTML === "") {
        box9.innerHTML = text;
        count++;
    }
    win();

    if (count === 9) {
        reset();
        count = 0;
    }

}
function win() {
  
  if (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box1.innerHTML !== "") {
      alert("Player " + box1.innerHTML + " wins!");
      reset();
  }
  
  else if (box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML && box4.innerHTML !== "") {
      alert("Player " + box4.innerHTML + " wins!");
      reset();
  }
  
  else if (box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML && box7.innerHTML !== "") {
      alert("Player " + box7.innerHTML + " wins!");
      reset();
  }
 
  else if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML && box1.innerHTML !== "") {
      alert("Player " + box1.innerHTML + " wins!");
      reset();
  }

  else if (box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML && box2.innerHTML !== "") {
      alert("Player " + box2.innerHTML + " wins!");
      reset();
  }
 
  else if (box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML && box3.innerHTML !== "") {
      alert("Player " + box3.innerHTML + " wins!");
      reset();
  }
 
  else if (box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML && box1.innerHTML !== "") {
      alert("Player " + box1.innerHTML + " wins!");
      reset();
  }
 
  else if (box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML && box3.innerHTML !== "") {
      alert("Player " + box3.innerHTML + " wins!");
      reset();
  }
}