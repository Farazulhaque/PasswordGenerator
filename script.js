document.getElementById("button").addEventListener("click", generatePassword);

function generatePassword() {
  var passwordlength = parseInt(
    document.getElementById("passwordlength").value
  );
  var symbol = document.getElementById("symbols");
  var number = document.getElementById("numbers");
  var lower = document.getElementById("lowercase");
  var upper = document.getElementById("uppercase");
  var similar = document.getElementById("similarchar");
  var passtext = "";
  var generatedRandomPassword = "";
  if (passwordlength < 8) {
    document.getElementById("alert").innerHTML =
      "Password Length must be greater than 8";
    document.getElementById("passwordlength").style.border = "2px solid red";
  } else {
    document.getElementById("passwordlength").style.border = "1px solid black";
    if (
      symbol.checked == false &&
      number.checked == false &&
      lower.checked == false &&
      upper.checked == false
    ) {
      document.getElementById("alert").innerHTML =
        "Please select atleast 1 field";
    } else {
      document.getElementById("alert").innerHTML = "";
      if (symbol.checked == true) {
        passtext = passtext.concat("!@#$%^&*_-/");
      }
      if (number.checked == true) {
        passtext = passtext.concat("0123456789");
      }
      if (lower.checked == true) {
        passtext = passtext.concat("abcdefghijklmnopqrstuvwxyz");
      }
      if (upper.checked == true) {
        passtext = passtext.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (similar.checked == true) {
        for (var i = 0; i < passtext.length; i++) {
          if (
            passtext[i] == "1" ||
            passtext[i] == "I" ||
            passtext[i] == "l" ||
            passtext[i] == "o" ||
            passtext[i] == "O" ||
            passtext[i] == "0"
          ) {
            passtext = passtext.replace(passtext[i], "");
          }
        }
      }
      for (var i = 0; i <= passwordlength; i++) {
        var indx = Math.floor(Math.random() * passtext.length);
        generatedRandomPassword += passtext.substring(indx, indx + 1);
      }
      document.getElementById("generatedpassword").value =
        generatedRandomPassword;
    }
  }
}

function copypass() {
  var copyText = document.getElementById("generatedpassword");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("message").innerHTML = "Password Copied";
}
