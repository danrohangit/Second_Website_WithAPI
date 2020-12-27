/* Test codes
$(document).ready(function () {
    var settings = {
      "url": "https://pokeapi.co/api/v2/pokemon/"+search+"/",
      "method": "GET",
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
  });//eof documentready
  End of test codes
*/

// Submission Event
// <----------------------------------------------------------------------------------------------------->
$("#poke_form").submit(function(event){

  event.preventDefault() //prevent auto submission

  $("#poke_image").empty() //upon submission, values in website deleted automatically

  var search_poke = $("#search_poke").val()

  var url = "https://pokeapi.co/api/v2/pokemon/"+search_poke+"/" //api and search function


    // Test code var $poke_image = $('#poke_image');

  // Half of submission <----------------------------------------------------------------------------------------------------->

  // Check for errors  <----------------------------------------------------------------------------------------------------->
  $.ajax({
      
    method:'GET',
    url:url,

    statusCode: {
      404: function () {

          alert("Check Spelling!");
      }
  },
  // End of error checking <----------------------------------------------------------------------------------------------------->

  // If succeed <----------------------------------------------------------------------------------------------------->

    success:function(data){
      console.log(data)
      $('#poke_image').html('');

      $('#poke_image').append('<li class="list_image"> <img src="'+data.sprites.front_default+'"></li>');
      $('#poke_image').append('<li>Name: '+data.name+'</li>');
      $('#poke_image').append('<li>ID: '+data.id+'</li><br>');
      
      $.each(data.stats, function(i,stat){
        $('#poke_image').append('<li>'+stat.stat.name +': '+ stat.base_stat + '</li>');
      })




        /* 
        Test codes
        $.each(data, function(i,picture){
            $poke_image.append('<li>'+picture.name+'</li>');  

        })
        End of test codes
        */
      },

    })

  })

