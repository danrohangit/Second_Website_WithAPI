$(document).ready(function () {
    var settings = {
      "url": "https://pokeapi.co/api/v2/pokemon/"+search+"/",
      "method": "GET",
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
  });//eof documentready