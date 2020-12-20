$(document).ready(function () {
    var settings = {
      "url": "https://pokeapi.co/api/v2/pokemon/",
      "method": "GET",
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
  });//eof documentready