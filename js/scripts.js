let pokemonRepository = (function() {
  let e = [],
      t = document.querySelector("#modal-container");

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function n(t) {
      "object" == typeof t && "name" in t && e.push(t);
  }

  function o() {
      return e;
  }

  function i() {
      t.classList.remove("is-visible");
  }

  function r(e) {
      let t = document.querySelector(".pokemon-list"),
          n = document.createElement("li");
      n.classList.add("pokemon-list-item");

      let o = document.createElement("button");
      o.setAttribute("data-toggle", "modal"), o.setAttribute("data-target", "#exampleModalCenter"), o.classList.add("btn");

      let img = document.createElement("img");
      img.src = e.imageUrl;
      img.alt = e.name;
      img.classList.add("pokemon-image");

      let span = document.createElement("span");
      span.innerText = capitalizeFirstLetter(e.name);

      o.appendChild(img);
      o.appendChild(span);
      n.appendChild(o);
      t.appendChild(n);

      o.addEventListener("click", function() {
          e.detailsUrl ? l(e) : console.error("Details URL not found for", e.name);
      });
  }

  function a(e) {
      return fetch(e).then(function(e) {
          if (!e.ok) throw Error("Network response not OK");
          return e.json();
      }).then(function(t) {
          if (!t.sprites || !t.sprites.front_default) return console.error("Sprites not found", t.name), null;
          n({
              name: t.name,
              detailsUrl: e,
              imageUrl: t.sprites.front_default,
              height: t.height,
              types: t.types
          });
      }).catch(function(e) {
          console.error("Error fetching details", e);
      });
  }

  function l(e) {
      var n, o, r;
      let a, l, s, c;
      n = e.name, o = `Height: ${e.height}`, r = e.imageUrl, (a = document.querySelector("#exampleModalCenter .modal-title")).innerHTML = "", a.innerText = n, (l = document.createElement("button")).classList.add("modal-close"), l.innerText = "Close", l.addEventListener("click", i), (s = document.querySelector("#exampleModalCenter .modal-body")).innerHTML = "", s.innerText = o, (c = document.createElement("img")).src = r, c.classList.add("img-fluid"), s.appendChild(c), t.classList.add("is-visible");
  }

  return window.addEventListener("keydown", e => {
      "Escape" === e.key && t.classList.contains("is-visible") && i();
  }), t.addEventListener("click", e => {
      e.target === t && i();
  }), {
      add: n,
      getAll: o,
      addListItem: r,
      loadList: function e() {
          return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e) {
              if (!e.ok) throw Error("Network response not OK");
              return e.json();
          }).then(function(e) {
              return Promise.all(e.results.map(function(e) {
                  return a(e.url);
              }));
          }).then(function() {
              pokemonRepository.getAll().forEach(function(e) {
                  e && r(e);
              });
          }).catch(function(e) {
              console.error("Error fetching data:", e);
          });
      },
      loadDetails: a,
      showDetails: l
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(e) {
      pokemonRepository.addListItem(e);
  });
});
