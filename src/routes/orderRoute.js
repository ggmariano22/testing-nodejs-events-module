import express from 'express'
import { create, show } from '../controllers/orderController.js'

const router = express.Router()

router.post('/', (req, res) => {
    create(req.body)

    res.send({
        message: 'If everything is fine, the order will be processed and stored soon.'
    })

    res.end();
})

router.get('/:id', (req, res) => {
    const order = show(req.params.id)

    res.json(order)

    res.end
})

export default router