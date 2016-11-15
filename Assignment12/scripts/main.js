// var messages = []

function submit(){

  var messages = []
  var firstName = getValue('firstName')
  var firstError = ('First Name is required')
  var lastName = getValue('lastName')
  var lastError = ('Last Name is required')
  var email = getValue('email')
  var emailError = ('Email is invalid')
  var password = getValue('password')
  var passwordError = ('Password field is empty')
  var confirm = getValue('confirm')
  var confirmError = ('Passwords do not match')
  var i = 0
  var list = '<ul>'

  if (firstName.length != 0 && lastName.length != 0 && email.length != 0 && email.indexOf('@') > -1 && password.length != 0 && confirm.length != 0){
    alert('Form submitted!')
  }
  if (firstName.length < 1){
    messages.push(firstError);
  }
  if (lastName.length < 1){
    messages.push(lastError);
  }
  if (email.length < 1 || email.indexOf('@') < 0){
    messages.push(emailError);
  }
  if (password.length < 1){
    messages.push(passwordError);
  }
  if (confirm.length < 1) {
    messages.push(confirmError);
  }

console.log(messages)

    for( var i = 0; i < messages.length; i++){
      list = list + '<li>' + messages[i] + '</li>'
      document.getElementById('message').innerHTML = list;
    }
    list = list + '</ul>'
}

function reset(){
  document.getElementById('firstName').value = "";
  document.getElementById('lastName').value = "";
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";
  document.getElementById('confirm').value = "";
}

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}


var btn = getElm('btnSubmit')
var btn2 = getElm('btnReset')

btn.addEventListener('click', submit);
btn2.addEventListener('click', reset);
