$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';


    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';

    var appendList = document.getElementById('#append')
    // console.log(appendList)

    $.ajax({
      url: appendUrl,
      method: 'get',
      success: function(response){
        $('.cl').html(response);
        var appendData = response;
        var ul = $('#append');
        for(i=0; i < response.length; i++){
          var post = response[i];
          var li = '<li>Index: '+ (i+1) + 'Title: ' + post.title + '</li>';
          ul.append(li);
          // console.log(post)
        }
      }
      })
      // failure: function(){
        // console.log('failure')
      })

    // }
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.get(prependUrl, function(response){
      console.log(response);
      var ul = $('#prepend');


      for(i=0; i < response.length; i++){
        var postTwo = response[i];
        var li = '<li>Index: '+ (i+1) + 'Title: ' + postTwo.title + '</li>';
        ul.prepend(li);
      }
    })
