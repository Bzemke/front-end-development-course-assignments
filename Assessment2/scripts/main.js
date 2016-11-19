
function submit() {
  var fName = getValue('firstName')
  var lName = getValue('lastName')
  var email = getValue('emailAddress')
  // var find = getValue('find')
  var need = getValue('need')
  var list = ('ul')
  var i = 0
  var message = []
  var accept = ('Thank you for your submission!')

if(fName.length != 0 &&
  lName.length != 0 &&
  email.length !=0 &&
  email.indexOf('@') > -1 &&
  email.indexOf('.com') > -1 &&
  // find.value != " " &&
  need.length != 0){
  document.getElementById('messages').innerHTML = accept;
}

  console.log(fName)

  for( var i = 0; i < message.length; i++){
    list = list + '<li>' + message[i] + '</li>'
    document.getElementById('messages').innerHTML = list;
  }
  list = list + '</ul>'
}


function reset() {
  document.getElementById("myForm").reset();
  document.getElementById('messages').innerHTML = "";
}

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}
document.getElementById('btnSubmit').addEventListener('click', submit);
