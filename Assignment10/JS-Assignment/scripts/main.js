    var array = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    console.log(firstName);
    console.log(lastName);
    document.getElementById('p1_fullName').innerHTML = fullName;

    if(firstName != "" && lastName != ""){
      document.getElementById('p1_valid').innerHTML = true;
      document.getElementById('p1_fullNameLength').innerHTML = fullName.length;
      document.getElementById('p1_fullNameLength2').innerHTML = fullName.length - 1;
    } else {
      document.getElementById('p1_valid').innerHTML = false;
      document.getElementById('p1_fullName').innerHTML = "Invalid";
      document.getElementById('p1_fullNameLength').innerHTML = "Invalid";
      document.getElementById('p1_fullNameLength2').innerHTML = "Invalid";
     }


    // Part 2
    var emailAddress = getValue('emailAddress');
    var isValidEmail = emailAddress.indexOf('@')
    console.log(emailAddress);
    if(emailAddress != ""){
      document.getElementById('p2_email').innerHTML = emailAddress;
      document.getElementById('p2_emailLength').innerHTML = emailAddress.length;
    } else {
      document.getElementById('p2_email').innerHTML = "Invalid";
      document.getElementById('p2_emailLength').innerHTML = "Invalid";
    }



    if(isValidEmail > -1){
      document.getElementById('p2_valid').innerHTML = true;
    } else {
      document.getElementById('p2_valid').innerHTML = false;
    }


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    parseInt(randomNumber);

  ///    document.getElementById('p3_valid').innerHTML = "Invalid";
    if (randomNumber >= 0 || randomNumber < 0){
      document.getElementById('p3_number').innerHTML = randomNumber;
      document.getElementById('p3_valid').innerHTML = true;
    } else {
      document.getElementById('p3_valid').innerHTML = false;
          document.getElementById('p3_number').innerHTML = "Invalid";
    }




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    console.log(array);
    if (arrayInput != "") {
        array.push(arrayInput);
    }

    console.log(array);
    document.getElementById('p4_arrayLength').innerHTML = array.length;
    document.getElementById('p4_display').innerHTML = array;







    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
