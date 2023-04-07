var enternu;
var confirmNum;
var confirmChara;
var confirmUpper;
var confirmLower;
var choose;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var toUpper = function (AA) {
    return AA.toUpperCase();
};
alpha2 = alpha.map(toUpper);

var generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
    pasw = generatePassword();
    document.getElementById("password").placeholder = pasw;
});

function generatePassword() {
    enternu = parseInt(prompt("How many characters would your password contain? Choose between 8 and 128"));
    if (!enternu) {
        alert("Please choose between 8 and 128");
    } else if (enternu < 8 || enternu > 128) {
        enternu = parseInt(prompt("Please choose between 8 and 128"));
    } else {
        confirmNum = confirm("Will the password contain numbers?");
        confirmChara = confirm("Will the password contain special characters?");
        confirmUpper = confirm("Will the password contain Uppercase letters?");
        confirmLower = confirm("Will the password contain Lowercase letters?");
    };
    if (!confirmChara && !confirmNum && !confirmUpper && !confirmLower) {
      choose = alert("Please choose at least one criteria");
    }
    else if (confirmChara && confirmNum && confirmUpper && confirmLower) {
      choose = character.concat(number, alpha, alpha2);
    }
    else if (confirmChara && confirmNum && confirmUpper) {
      choose = character.concat(number, alpha2);
    }
    else if (confirmChara && confirmNum && confirmLower) {
      choose = character.concat(number, alpha);
    }
    else if (confirmChara && confirmLower && confirmUpper) {
      choose = character.concat(alpha, alpha2);
    }
    else if (confirmNum && confirmLower && confirmUpper) {
      choose = number.concat(alpha, alpha2);
    }
    else if (confirmChara && confirmNum) {
      choose = character.concat(number);
    } else if (confirmChara && confirmLower) {
      choose = character.concat(alpha);
    } else if (confirmChara && confirmUpper) {
      choose = character.concat(alpha2);
    }
    else if (confirmLower && confirmNum) {
      choose = alpha.concat(number);
    } else if (confirmLower && confirmUpper) {
      choose = alpha.concat(alpha2);
    } else if (confirmNum && confirmUpper) {
      choose = number.concat(alpha2);
    }
    else if (confirmChara) {
      choose = character;
    }
    else if (confirmNum) {
      choose = number;
    }
    else if (confirmLower) {
      choose = alpha;
    }
    else if (confirmUpper) {
      choose = space.concat(alpha2);
    };

    var password = [];
    for (var i = 0; i < enternu; i++) {
        var pickchoice = choose[Math.floor(Math.random() * choose.length)];
        password.push(pickchoice);
    }

    var pasw = password.join("");
    UserInput(pasw);
    return pasw;
}

function UserInput(pasw) {
    document.getElementById("password").textContent = pasw;
}
