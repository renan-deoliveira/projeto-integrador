function solicitarProdutos(req,res){
    res.status(200).send({
        tipo: 'jogo fisico',
        nome: 'God Of War',
        valor: 100.00,

            })
}


module.exports = solicitarProdutos;