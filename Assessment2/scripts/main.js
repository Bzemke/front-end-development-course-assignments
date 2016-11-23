firstName.classList.remove('error')
lastName.classList.remove('error')
emailAddress.classList.remove('error')
find1.classList.remove('error')
need1.classList.remove('error')

function submit() {
  var fName = getValue('firstName');
  var lName = getValue('lastName');
  var email = getValue('emailAddress');
  var need = getValue('need1');
  var list = ('<ul>');
  var i = 0;
  var message = [];
  var accept = ('Thank you for your submission!');
  var agreed = getElm('agree').checked;
  var selector = document.getElementById('find1');
  var dropDown = selector[selector.selectedIndex].value;

  firstName.classList.remove('error')
  lastName.classList.remove('error')
  emailAddress.classList.remove('error')
  find1.classList.remove('error')
  need1.classList.remove('error')


if(fName.length != 0 &&
  lName.length != 0 &&
  email.length !=0 &&
  email.indexOf('@') > -1 &&
  email.indexOf('.com') > -1 &&
  dropDown !== '0' &&
  need.length != 0)
  {
  document.getElementById('messages').innerHTML = accept;
}

if(fName.length < 1){
  message.push('First name must be filled out.');
  firstName.classList.add('error');
}
if(lName.length < 1){
  message.push('Last name must be filled out.');
  lastName.classList.add('error');
}
if(email.length < 1){
  message.push('E-mail address must be filled out.');
  emailAddress.classList.add('error');
}else if (email.indexOf('@') < 0 || email.indexOf('.com') < 0){
  message.push('E-mail address is invalid.');
  emailAddress.classList.add('error');
}
if(dropDown === "0"){
  message.push('Please select how you found us.');
  find1.classList.add('error');
}
if(need.length < 1){
  message.push('Please describe why you need the blender.');
  need1.classList.add('error');
}
// if(agreed = 'false'){
  // message.push('You must accept the terms and conditions.');
// }


  console.log(dropDown)
  console.log(agreed)

  for( var i = 0; i < message.length; i++){
    list = list + '<li>' + message[i] + '</li>'
    document.getElementById('messages').innerHTML = list;
  }
  list = list + '</ul>'
}


function reset() {
  document.getElementById("myForm").reset();
  // document.getElementById('messages').reset();
  // var message = [];
  // document.getElementById('messages').innerHTML = "";
}

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
document.getElementById('btnSubmit').addEventListener('click', submit);
// document.getElementById('reset').addEventListener('click', reset);
