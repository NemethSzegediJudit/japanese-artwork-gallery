const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(express.json());
app.use(cors());

//----------Endpoint for favorites----------
app.get("/favorites", (req, res) => {
  fs.readFile("favorites.json", "utf8", (err, data) => {
    const favorites = JSON.parse(data);

    if (err) throw err;

    res.send(favorites);
  });
});

//----------Endpoint for POST favorites----------
app.post("/add-to-favorites", (req, res) => {
  fs.readFile("favorites.json", "utf8", (err, data) => {
    const favorites = JSON.parse(data);

    favorites.push(req.body);

    fs.writeFile("favorites.json", JSON.stringify(favorites), (err) => {
      if (err) throw err;
      console.log("Artwork is added to favorites");
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
