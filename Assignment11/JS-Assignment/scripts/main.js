///var messages = []

function update(){

var messages = []
var firstName = getValue('firstName')
var lastName = getValue('lastName')
var emailAddress = getValue('emailAddress')
var firstError = 'First Name is required'
var lastError = 'Last Name is required'
var emailError = 'Email address is required'
var i = 0
var list = '<ul>'

  if (firstName.length != 0 && lastName.length != 0 && emailAddress.length != 0 && emailAddress.indexOf('@') > -1) {
    alert('Form Submitted');
    console.log(firstName, lastName, emailAddress);
  }
  if (firstName.length < 1) {
    messages.push(firstError);
  } else {
    console.log(firstName);
  }
  if (lastName.length < 1) {
    messages.push(lastError);
  } else {
    console.log(lastName);
  }
  if (emailAddress.length < 1 || emailAddress.indexOf('@') <0) {
    messages.push(emailError);
  } else {
    console.log(emailAddress);
  }
console.log(messages)

for( var i = 0; i < messages.length; i++){
  list = list + '<li>' + messages[i] + '</li>'
  document.getElementById('error-list').innerHTML = list;
}
list = list + '</ul>'

}

var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
