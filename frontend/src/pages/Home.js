import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pokemon")
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
};

export default Home;