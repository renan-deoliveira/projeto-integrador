const express = require('express');
const routes = express();

routes.get('/',(req, res)=>{
    res.status(200).send({titulo: 'home'})
})

export default routes;