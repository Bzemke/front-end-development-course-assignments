firstName.classList.remove('error')
lastName.classList.remove('error')
email.classList.remove('error')
password.classList.remove('error')
confirm1.classList.remove('error')


function submit(){

  firstName.classList.remove('error')
  lastName.classList.remove('error')
  email.classList.remove('error')
  password.classList.remove('error')
  confirm1.classList.remove('error')

  var messages = []
  var fName = getValue('firstName')
  var firstError = ('First Name is required')
  var lName = getValue('lastName')
  var lastError = ('Last Name is required')
  var email1 = getValue('email')
  var emailError = ('Email is invalid')
  var password1 = getValue('password')
  var passwordError = ('Password field is empty')
  var confirm2 = getValue('confirm1')
  var confirmError = ('Passwords do not match')
  var i = 0
  var list = '<ul>'

  if (fName.length != 0
      && lName.length != 0
      && email1.length != 0
      && email1.indexOf('@') > -1
      && password1.length != 0
      && confirm2.length != 0){
    alert('Form submitted!')
  }
  if (fName.length < 1){
    messages.push(firstError);
    firstName.classList.add('error');
  }
  if (lName.length < 1){
    messages.push(lastError);
    lastName.classList.add('error');
  }
  if (email1.length < 1
    || email1.indexOf('@') < 0){
    messages.push(emailError);
    email.classList.add('error');
  }
  if (password1.length < 1){
    messages.push(passwordError);
    password.classList.add('error');
  }
  if (confirm2.length < 1) {
    messages.push(confirmError);
    confirm1.classList.add('error');
  }
  if (password1.value != 0 &&
      confirm2.value != 0 &&
      password1.value !== confirm2.value) {
    messages.push(confirmError)
    password.classList.add('error')
    confirm1.classList.add('error')
  }

console.log(messages)

    for( var i = 0; i < messages.length; i++){
      list = list + '<li>' + messages[i] + '</li>'
      document.getElementById('message').innerHTML = list;
    }
    list = list + '</ul>'
}

function reset(){
  getElm('firstName').value = "";
  getElm('lastName').value = "";
  getElm('email').value = "";
  getElm('password').value = "";
  getElm('confirm1').value = "";
  getElm('message').innerHTML = "";
  firstName.classList.remove('error');
  lastName.classList.remove('error');
  email.classList.remove('error');
  password.classList.remove('error');
  confirm1.classList.remove('error');
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
