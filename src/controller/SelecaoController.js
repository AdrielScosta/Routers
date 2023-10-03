const user = require('../db/user.js');
class SelecaoController{

    async index(req, res){
        const dados = await user.findAll()

        return res.send(dados)
    }
    async show(req, res){
        const id = req.params.id

        const dados = await user.findByPk(id)

        if(dados) return res.send(dados)
        return res.send({data: 'Sem dados'})

    }
    store(){}
    update(){}
    delete(){}

}

module.exports = new SelecaoController()