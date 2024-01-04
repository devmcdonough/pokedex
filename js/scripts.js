let pokemonRepository = (function () {

  let pokemonList = [
    {
      name: "Pikachu",
      height: 0.5,
      type: "Electric",
      species: "Mouse",
      abilities: ["Static", "Blaze", "Shield Dust"],

    },
    {
      name: "Charmander",
      height: 0.6,
      type: {
        name: "Fire",
        description: "Hot. Ouch!",
      },
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

function add(pokemon) {
  
}

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(showDetails) {
      console.log(showDetails);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    }
    
  }
)();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Bulbasaur', height: 0.9 })

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
})



// let button = document.querySelector('button');
// button.addEventListener('click', function (event) {
//   let target = event.target;
//   target.classList.toggle('button--red');
//   target.classList.toggle('button--green');
// });

// let element = document.querySelector('select');
// element.value; // returns '1' as that’s currently selected
// element.value = '2';

// let selectedIndex = element.selectedIndex;
// if (selectedIndex > -1) {
//   let selectedOption = element.querySelectorAll('option')[selectedIndex];
// }

// let ageGroupElement = document.querySelector('input[name="age-group"]:checked');
// let value = ageGroupElement ? ageGroupElement.value : null;




// let foodList = ['tuna', 'cheese', 'salad', 'nutter butter'];

// document.write('<h3>===for LOOP===</h3>');
// for (let i = 0; i < foodList.length; i++) {
//   document.write('<p>' + foodList[i] + '</p>');
// }

// document.write('<h3>===forEach LOOP===</h3>');
// foodList.forEach(function (foodItem, num) {
//   document.write('<p>' + (num + 1) + foodItem +  '</p>');
// });

// let container = document.querySelector('.container');
// let button = document.createElement('button');
// button.innerText = 'Click me';
// container.appendChild(button);

// let container = document.querySelector('.container');
// let elementToRemove = document.querySelector('p');
// elementToRemove.parentElement.removeChild(elementToRemove);

// let subtitle = document.querySelector('h3');
// console.log(subtitle.innerText);
// subtitle.innerText = "Hey guuuuys";
// console.log(subtitle.innerText);

// let container = document.querySelector('.container');
// container.innerHTML = '<button>Click me</button>'

// element = document.querySelector('div');
// console.log(element.getAttribute('id'));
// console.log(element.hasAttribute('value'));
// element.setAttribute('id', 'new-id');
// console.log(element.getAttribute('id'));

// element.classList.contains('container');