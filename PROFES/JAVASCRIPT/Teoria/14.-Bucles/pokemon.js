//!------------------------------------------------------------------------------------------------
//?  -----------------------------------Ejemplo la pokeAPI ----------------------------------------
//!------------------------------------------------------------------------------------------------
const pokemons = {
    "count": 1281,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}
const pokemonArray = []

const printGallery = (data) => {

    data.forEach((pokemon) => {

        const figurePokemon = `
        <figure>
            <img src=${pokemon.image} alt=${pokemon.name}>
            <h3>${pokemon.name}</h3>
        </figure>
        `
        const galleryDiv = document.querySelector(".gallery")
        galleryDiv.innerHTML += figurePokemon
    })

}
const mappeoData = () => {
    const mappeoPokemonAll = pokemonArray.map((pokemon) => ({ name: pokemon.name, image: pokemon.sprites.other.dream_world.front_default }))
    printGallery(mappeoPokemonAll)
}
const getData = async (url) => {
    const data = await fetch(url)
    const dataJson = await data.json()
    pokemonArray.push(dataJson)
}

const init = async () => {
    for (let pokemon of pokemons.results) {
        // esto se puede meter tambien como pokemons["results"]
        for (let clave in pokemon) {
            if (clave == "url") {
                //console.log(`Para la clave ${clave}:${pokemon[clave]}`)
                await getData(pokemon[clave])
            }
        }
    }
    mappeoData()
}

init()