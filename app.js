const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Tavina Chen here. This is my Continuous Delivery Pipeline Tutorial demo'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
