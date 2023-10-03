const express = require('express');
const router = express.Router()
const SelecaoController = require('../controller/SelecaoController.js')
const { eAdmin } = require('../helpers/admin.js')

router.get('/', SelecaoController.index)

router.get('/:id', eAdmin, SelecaoController.show)

router.put('/', (req, res)=>{
    res.send({data: "Rota put"})
})

router.post('/', (req, res)=>{
    res.send({data: "Rota post"})
})

router.delete('/', (req, res)=>{
    res.send({data: "Rota delete"})
})

module.exports = router