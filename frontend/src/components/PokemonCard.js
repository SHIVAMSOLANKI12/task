import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.types.join(", ")}</p>

      <Link to={`/pokemon/${pokemon.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default PokemonCard;