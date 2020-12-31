var pokemons_1 = JSON.parse(localStorage.getItem("pokemonsInList"));

$.each(pokemons_1, function(i,item){
    console.log(item);
})
      
$("#poke_hist_form").submit(function(event){

    event.preventDefault() //prevent auto submission
  
    $("#poke_hist").empty() //upon submission, values in website deleted automatically

    window.localStorage.clear();

    location.reload();
})
