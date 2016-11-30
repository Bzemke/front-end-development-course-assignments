$(document).ready(function(){

     ///// Code goes here

$('#btnOne').on('click', function(){
    alert('You clicked the first button!');
});

$('#btnTwo').on('click', function(){
  $('.update-html').html('Hello World')
});

$('#btnThree').on('click', function(){
  $('#text-update').val('Hello World')
});

$('#btnCopyHtml').on('click', function(){
  var copiedHtml = $('.copy-html').html()
  $('.paste-html').html(copiedHtml)
});

$('#btnCopyValues').on('click', function(){
  var copiedValue = $('#copy-text').val()
  $('#paste-text').val(copiedValue)
});

});
