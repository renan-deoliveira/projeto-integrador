const express = require('express');
const api = express();

api.get('/',(req, res)=>{
  res.status(200).send({titulo: 'home'})
})
const port = process.env.PORT || 3000;


api.listen(port,() =>{ console.log(`Servidor escutando em http://localhost:${port}`)})

