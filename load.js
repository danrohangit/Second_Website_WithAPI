var pokemons_1 = JSON.parse(localStorage.getItem("pokemonsInList"));

$.each(pokemons_1, function(i,item){

$('#poke_hist').append('<li class="list_image"> <img src="'+item.picture+'"></li>');
$('#poke_hist').append('<li>Name: '+item.name+'</li>');
$('#poke_hist').append('<li>ID: '+item.id+'</li><br>');
    console.log(item);

})
      
$("#poke_hist_form").submit(function(event){

    event.preventDefault() //prevent auto submission
  
    $("#poke_hist").empty() //upon submission, values in website deleted automatically

    window.localStorage.clear();

    location.reload();
})
