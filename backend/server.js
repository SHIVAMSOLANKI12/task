const express = require("express");
const cors = require("cors");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pokemon", pokemonRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});