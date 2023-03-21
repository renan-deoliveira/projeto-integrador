const express = require('express');
const api = express();
const router = require('./routes/router.js')

const port = process.env.PORT || 3000;

api.use('/', router)
api.listen(port, () => { console.log(`Servidor escutando em http://localhost:${port}`) })

