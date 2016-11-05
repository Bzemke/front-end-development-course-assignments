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
    } else {
      document.getElementById('p1_valid').innerHTML = false;
    }

    document.getElementById('p1_fullNameLength').innerHTML = fullName.length;
    document.getElementById('p1_fullNameLength2').innerHTML = fullName.length - 1;

    // Part 2
    var emailAddress = getValue('emailAddress');
    var isValidEmail = emailAddress.indexOf('@')
    console.log(emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;

    if(isValidEmail > -1){
      document.getElementById('p2_valid').innerHTML = true;
    } else {
      document.getElementById('p2_valid').innerHTML = false;
    }


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById('p3_number').innerHTML = randomNumber;

    if(randomNumber >= 0 || randomNumber <= 0){
      document.getElementById('p3_valid').innerHTML = true;
    } else {
      document.getElementById('p3_valid').innerHTML = false;
    }




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    console.log(array);
    array.push(arrayInput);
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
