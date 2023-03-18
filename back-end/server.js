const express = require('express');
const api = express();

const port = process.env.PORT || 3000;

api.listen(port,() =>{ console.log(`Servidor escutando em http://localhost:${port}`)})