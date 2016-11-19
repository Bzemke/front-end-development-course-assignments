
function submit() {
  var fName = getElm(firstName)
  // var lName = getValue(lastName)
  // var email = getValue(emailAddress)
  // var find = getValue(find)
  // var need = getValue(need)
  var list = ('ul')
  var i = 0
  var message = []
  var accept = ('Thank you for your submission!')

  if(firstName.length != 0){
    // message.push("Thank you for your submission!")
    !alert('test')
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
}

// function getValue(id) {
    // return getElm(id).value;
// }

function getElm(id) {
    return document.getElementById(id);
}
document.getElementById('btnSubmit').addEventListener('click', submit);
