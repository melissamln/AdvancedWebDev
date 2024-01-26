const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
const ModelClass = require("./model.js");
const Model = new ModelClass();

app.get("/", function (req, res) {
  res.send("Hello World");
});

//rows is hard coded in the query
const server = async () => {
  await Model.connectDatabase();
  await Model.setupDatabase();
  //   const { rows } = await pool.query("SELECT * FROM public.stores");
  //   console.log(rows);

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
};

server();
