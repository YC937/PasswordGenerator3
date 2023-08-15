// Define variebles
var enternu;
var confirmNum;
var confirmChara;
var confirmUpper;
var confirmLower;
var chosen;

// List of what can be used in the password
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var toUpper = function (AA) {
    return AA.toUpperCase();
};
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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
      chosen = alert("Please choose at least one criteria");
    }
    else if (confirmChara && confirmNum && confirmUpper && confirmLower) {
      chosen = character.concat(number, alpha, alpha2);
    }
    else if (confirmChara && confirmNum && confirmUpper) {
      chosen = character.concat(number, alpha2);
    }
    else if (confirmChara && confirmNum && confirmLower) {
      chosen = character.concat(number, alpha);
    }
    else if (confirmChara && confirmLower && confirmUpper) {
      chosen = character.concat(alpha, alpha2);
    }
    else if (confirmNum && confirmLower && confirmUpper) {
      chosen = number.concat(alpha, alpha2);
    }
    else if (confirmChara && confirmNum) {
      chosen = character.concat(number);
    } else if (confirmChara && confirmLower) {
      chosen = character.concat(alpha);
    } else if (confirmChara && confirmUpper) {
      chosen = character.concat(alpha2);
    }
    else if (confirmLower && confirmNum) {
      chosen = alpha.concat(number);
    } else if (confirmLower && confirmUpper) {
      chosen = alpha.concat(alpha2);
    } else if (confirmNum && confirmUpper) {
      chosen = number.concat(alpha2);
    }
    else if (confirmChara) {
      chosen = character;
    }
    else if (confirmNum) {
      chosen = number;
    }
    else if (confirmLower) {
      chosen = alpha;
    }
    else if (confirmUpper) {
      chosen = space.concat(alpha2);
    };

    var password = [];
    for (var i = 0; i < enternu; i++) {
        var pickchoice = chosen[Math.floor(Math.random() * chosen.length)];
        password.push(pickchoice);
    }

    var passwo = password.join("");
    UserInput(passwo);
    return passwo;
}

function UserInput(passwo) {
    document.getElementById("password").textContent = passwo;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    passwo = generatePassword();
  }
);
