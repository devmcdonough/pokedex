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

let pokemonList2 = [
  {
    name: "Pikamurraychu",
    height: 0.5,
    type: "Electric",
    species: "Mouse",
    abilities: "Static",
  },
  {
    name: "Charmmurrayander",
    height: 0.6,
    type: "Fire",
    species: "Lizard",
    abilities: "Blaze",
  },
  {
    name: "Weemurraydle",
    height: 0.4,
    type: "Bug",
    species: "Hairy Bug",
    abilities: "Shield Dust",
  }
];


pokemonList.forEach(function(pokemon) {
  if (pokemon.height > .5) {
  document.write("<p>" + pokemon.name + ": " + pokemon.height + " - Wow, that's big!" + "</p>");
    } else {
      document.write("<p>" + pokemon.name + ": " + pokemon.height) + "</p>";
    }
})

pokemonList2.forEach(function(pokemon2) {
  if (pokemon2.height > .5) {
  document.write("<p>" + pokemon2.name + ": " + pokemon2.height + " - Wow, that's big!" + "</p>");
    } else {
      document.write("<p>" + pokemon2.name + ": " + pokemon2.height) + "</p>";
    }
})
