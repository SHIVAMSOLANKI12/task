import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [data, setData] = useState(null);
  const [tab, setTab] = useState("types");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pokemon/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      {/*  BACK BUTTON */}
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{data.name}</h2>

      <button onClick={() => setTab("types")}>Types</button>
      <button onClick={() => setTab("moves")}>Moves</button>
      <button onClick={() => setTab("game")}>Game Indices</button>

      {tab === "types" && (
        <ul>
          {data.types.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      )}

      {tab === "moves" && (
        <ul>
          {data.moves.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      )}

      {tab === "game" && (
        <ul>
          {data.gameIndices.map((g, i) => (
            <li key={i}>{g.version.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Details;