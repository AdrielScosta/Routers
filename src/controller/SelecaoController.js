class SelecaoController{

    index(req, res){
        res.send({data: "Rota get"})
    }
    show(req, res){
        const id = req.params.id

        res.send({data: 'Meu id é: '+id})
    }
    store(){}
    update(){}
    delete(){}

}

module.exports = new SelecaoController()