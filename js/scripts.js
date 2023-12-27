let pokemonList = [
  {
    name: "Pikachu",
    height: 0.5,
    type: "Electric",
    species: "Mouse",
    abilities: "Static",
  },
  {
    name: "Charmander",
    height: 0.6,
    type: "Fire",
    species: "Lizard",
    abilities: "Blaze",
  },
  {
    name: "Weedle",
    height: 0.4,
    type: "Bug",
    species: "Hairy Bug",
    abilities: "Shield Dust",
  }
];

for (let i = 0; i < pokemonList.length; i++)
if (pokemonList[i].height > .5) {
  document.write("<p>" + pokemonList[i].name + ": " + pokemonList[i].height + " Wow, that's big!" + "</p>");
} else {
  document.write("<p>" + pokemonList[i].name + ": " + pokemonList[i].height) + "</p>";
}


  


    //let condition = true;
    //let condition = 1 >= 1;
    // let condition = 1 >= 2;
    // let condition = 1 != 2;
    // let condition = null;
    // let condition = false && '';
    // let condition = false && 'Hello World!';
    // let condition = null || false;
    // let condition = false || 42;
    // let condition = (42 >= (2 + 40)) && (false || 'Hello World');
    //* let condition = true && ' ';

    //if(condition){
    //console.log('The result is true:', condition)
    //}else{
    //console.log('The result is false:', condition)
    //}

    
    


