const pokedex_api = "https://pokeapi.co/api/v2";
const pokemon_image =
  "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";

window.onload = async function () {
  const data = await fetch(`${pokedex_api}/pokemon?limit=151`);
  const json = await data.json();

  const pokemons = json.results;

  const items_box = document.querySelector("#items_box");

  pokemons.forEach((pokemon) => {
    const item = document.createElement("div");
    item.classList.add("item_box");
    item.innerHTML = `
        <div class="item_img">
                <img src="${pokemon_image}${
      pokemon.url.split("/")[6]
    }.svg" alt="${pokemon.name}">
        </div>
        <div class="item_name">
            <h4>${pokemon.name}</h4>
        </div>
        `;
    items_box.appendChild(item);
  });
};
