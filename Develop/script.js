// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  let amount = prompt("Please enter amount of characters 8-128.");
  if (amount <= 7 || amount>=128) {
    alert("Please enter character amount between 8-128");
    

  } else {
    if (confirm("Would you like to use lower-case letters?")){
      var lowerCase = true;
      console.log(lowerCase);
    } else {
      var lowerCase = false;
      console.log(lowerCase);
    }
    if (confirm("Would you like to use upper-case letters?")){
      var upperCase = true;
      console.log(upperCase)
    }
    if (confirm("would you like to use numbers?")){
      var numerics = true;
      console.log(numerics);
      alert("Numbers will be added to your Password.")
    } else {
      var numerics = false;
      console.log(numerics);
      alert("No numbers will be used.");
    }
    if (confirm("Would you like to use special charcters? (ex.!@#$)")){
      var specChar = true;
      console.log(specChar);
      alert("Special characters will be added to your Password.")
    } else {
      var specChar = false;
      console.log(specChar);
      alert("No special characters will be used.");
    }
    
    var charAmount = amount;
    console.log(charAmount)
  }
  
  function generatePassword(length){
    console.log("button success");
    console.log(passwordText);
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result ="";
    const upperCaseLettersLength = upperCaseLetters.length;
    for (let i = 0; i < length; i++){
      result += upperCaseLetters.charAt(Math.floor(Math.random()* upperCaseLettersLength));

    }
    


    // Criteria Selection
    
      //if (lowerCase == false && upperCase == false && numerics == false && specChar == false){
      //  alert("Cannot generate password! Please confirm at least one character type.");

     // } else if (lowerCase == true){
     // console.log("lowercase");
      //}
    
    
    return result;
    

    


    
  }
  console.log(generatePassword(amount));


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
