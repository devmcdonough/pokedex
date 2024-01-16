let pokemonRepository = (function () {
  let pokemonList = []
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  // This adds pokemon to the PokemonList if they are valid
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } 
  }

  // Gets value of array
  function getAll() {
    return pokemonList;
  }

  function showModal(title, text, pokemonImage) {
    let pokemonTitle = document.querySelector("#exampleModalCenter .modal-title");

    //clear existing modal content
    pokemonTitle.innerHTML = '';
    pokemonTitle.innerText = title;

    //add new content to modal
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    
    //Modal content
    let modalBody = document.querySelector("#exampleModalCenter .modal-body");
    modalBody.innerHTML = '';
    modalBody.innerText = text;

    let imageElement = document.createElement('img');
    imageElement.src = pokemonImage;
    imageElement.classList.add('img-fluid');
    modalBody.appendChild(imageElement);
   
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

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response not OK');
        }
        return response.json();
      })
      .then(function (json) {
        return Promise.all(json.results.map(function (item) {
          return loadDetails(item.url);     
        }));
      })
      .then(function () {
        pokemonRepository.getAll().forEach(function (pokemon) {
          if (pokemon) {
          addListItem(pokemon);
          }
        });
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      })
  }

  function addListItem(pokemon) {
    let pokemonListContainer = document.querySelector('.pokemon-list');
    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item');
    let button = document.createElement("button");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModalCenter")
    button.innerText = pokemon.name;
    button.classList.add("btn");
    listItem.appendChild(button);
    pokemonListContainer.appendChild(listItem);
    button.addEventListener('click', function () {
      if (pokemon.detailsUrl) {
      showDetails(pokemon);
      } else {
        console.error('Details URL not found for', pokemon.name);
      }
    })
  }

  function loadDetails(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Network response not OK');
        }
        return response.json();
      })
      .then(function (details) {
        if(!details.sprites || !details.sprites.front_default) {
          console.error('Sprites not found', details.name);
          return null;
        }
        // Now we add the details to the item
        
        let pokemon = {
          name: details.name,
          detailsUrl: url,
          imageUrl: details.sprites.front_default,
          height: details.height,
          types: details.types
        };
        add(pokemon);
      })
      .catch(function (error) {
        console.error('Error fetching details', error);
      });
  }

  function showDetails(pokemon) {
    showModal(pokemon.name, `Height: ${pokemon.height}`, pokemon.imageUrl);
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