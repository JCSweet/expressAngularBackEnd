const express = require ('express');
const app = express();
const carts = require('./routes/carts')
const cors = require('cors');
 
const port = 9000;


app.use(cors());

app.use(express.json());
app.use('/', carts);

const { cartItems } = require('./cartItems');
app.get('/', (req, res) => {
  // **Will default to status 200 (Optional: can change)**
res.send(cartItems);
});

app.listen(port, () => console.log(`app is up and running on port: ${port}`));


