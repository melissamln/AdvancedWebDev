const express = require('express');
const app = express();
const port = 3000;

const stores = require('./stores.json'); 

app.get('/stores/:storename', (req, res) => {
  const{storename} = req.params;
  console.log(storename);
  const storeIndex = stores.findIndex ((store) => store.name === storename); // for loop that returns the index of that line
  console.log(`Store index is ${storeIndex}`);
  if (storeIndex === -1){
    res.send('Not found');
  } else {
    res.json(stores[stores]);
  }
});

app.get('/stores/:district', (req, res) => {
  const {district} = req.params;
  const storesInDistrict = stores.filter((store) => store.district === district);
  res.json(storesInDistrict);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
