let pokemonRepository = (function () {

  let pokemonList = []

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let modalContainer = document.querySelector('#modal-container');


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }


  function getAll() {
    return pokemonList;
  }

  function showModal(title, text, img) {
    //clear existing modal content
    modalContainer.innerHTML = '';
  
    //create modal
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    //add new content to modal
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
  
    //Modal content
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
  
    let contentElement = document.createElement('p');
    contentElement.innertext = text;
  
    let imgContainer = document.querySelector('#image-container');
    let imageElement = document.createElement('img');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    imgContainer.appendChild(imageElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && 
    modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    })
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          img: item.image,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.img = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }

}
)();



pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



    // console.log(pokemonRepository.getAll());
    // pokemonRepository.add({ name: 'Bulbasaur', height: 0.9 })

    // pokemonRepository.getAll().forEach(function (pokemon) {
    //   pokemonRepository.addListItem(pokemon);
    // })

    // let thisIsAJsonString = '{"name":"Lisa","age":27}';
    // let lisa = JSON.parse(thisIsAJsonString);
    // console.log(lisa.name, lisa.age);

    // let john = {
    //   name: 'John',
    //   age: 31
    // };
    // let jsonString = JSON.stringify(john);
    // console.log(jsonString); // '{"name":"John","age":31}'

    // let list = [1, 2, 3];
    // console.log(JSON.stringify(list)); // '[1,2,3]'
    // let otherList = JSON.parse('[3,4,5]'); // [3, 4, 5]


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