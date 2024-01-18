const express = require("express");
const app = express();
const port = 3000;

const stores = require("./stores.json");

// app.get("/", (req, res) => {
//   const { storename } = req.query;
// });

//store is the equlivent to a "row"
// ? means query params

app.get("/", (req, res) => {
  const { storename } = req.query;
  console.log(storename);
  const storeIndex = stores.findIndex((store) => store.name === storename); // for loop that returns the index of that line
  console.log(`Store index is ${storeIndex}`);
  if (storeIndex === -1) {
    res.send("Not found");
  } else {
    res.json(stores[storeIndex]);
  }
});

app.delete("/", (req, res) => {
  const { storename } = req.query;
  const storeIndex = stores.findIndex((row) => row.name === storename); // for loop that returns the index of that line
  if (storeIndex !== -1) {
    stores.splice(storeIndex, 1);
    res.send("store deleted");
  } else {
    res.send("store not found");
  }
});

// the slash in the dynmic link thingy

// app.get("/stores/:district", (req, res) => {
//   const { district } = req.params;
//   const storesInDistrict = stores.filter(
//     (store) => store.district === district
//   );
//   res.json(storesInDistrict);
// });

//adding a store but not the the json
//  coma in express means move to the next thing

app.post("/", express.json(), (req, res) => {
  const { body } = req;
  console.log(body);
  stores.push(body);
  res.send("store added");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
