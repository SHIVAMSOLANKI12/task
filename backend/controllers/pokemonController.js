const axios = require("axios");

// List API
exports.getPokemonList = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const results = response.data.results;

    const pokemonData = await Promise.all(
      results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          id: details.data.id,
          name: details.data.name,
          image: details.data.sprites.front_default,
          types: details.data.types.map((t) => t.type.name),
        };
      })
    );

    res.json(pokemonData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching pokemon list" });
  }
};

// Details API
exports.getPokemonDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    const data = response.data;

    res.json({
      name: data.name,
      types: data.types.map((t) => t.type.name),
      moves: data.moves.map((m) => m.move.name).slice(0, 10),
      gameIndices: data.game_indices,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching details" });
  }
};