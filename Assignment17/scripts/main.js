$(document).ready(function(){

$('.error').hide();
$('.input-group').filter(':even').addClass('even');

// var inputs = $('input')
// var evenInputs = inputs.filter(':even');

  // evenInputs.addClass('even');
  // console.log(evenInputs)

  $('#firstName').on('blur', function(){
    var fName = $(this);
    var msg = fName.closest('.input-group').find('.requiredMsg');

	if(fName.val() === ''){
    msg.fadeIn();
  }else{
    msg.fadeOut();
  }
  });

});
