/*
$(document).ready(function () {
    var settings = {
      "url": "https://pokeapi.co/api/v2/pokemon/"+search+"/",
      "method": "GET",
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
  });//eof documentready
*/

  $("#poke_form").submit(function(event){
    event.preventDefault()

    $("#poke_image").empty()

    var search_poke = $("#search_poke").val()

    var url = "https://pokeapi.co/api/v2/pokemon/"+search_poke+"/"


    // var $poke_image = $('#poke_image');

    $.ajax({
      
      method:'GET',
      url:url,
      success:function(data){
        console.log(data)
        $('#poke_image').html('');

        $('#poke_image').append('<li class="list-image"> <img src="'+data.sprites.front_default+'"></li>');

        /*
        $.each(data, function(i,picture){
            $poke_image.append('<li>'+picture.name+'</li>');  

        })
        */
      }
    })
  })

