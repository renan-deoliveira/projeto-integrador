const express = require('express');
const api = express();
const router = require('./src/routes/router.js')

const port = process.env.PORT || 8888;


api.get('/', (req, res) => {
    res.status(200).send("Home Page")
})
api.use(express.json());
api.use('/', router)
api.listen(port, () => { console.log(`Servidor escutando em http://localhost:${port}`) })

