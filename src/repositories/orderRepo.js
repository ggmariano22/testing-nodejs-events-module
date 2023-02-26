import { EventEmitter } from 'node:events'
const items = []

export const store = (order) => {
    items.push(order)
}

export const get = (id) => {
    const order = items.find((order, index) => {
        if (index === parseInt(id)) {
            return order
        }
    })

    return order ?? {}
}