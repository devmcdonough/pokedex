let pokemonRepository = (function () {

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
  ]

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    }
  }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Bulbasaur', height: '0.9' })

pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height > .5) {
    document.write("<p>" + pokemon.name + ": " + pokemon.height + " - Wow, that's big!" + "</p>");
  } else {
    document.write("<p>" + pokemon.name + ": " + pokemon.height) + "</p>";
  }
})
