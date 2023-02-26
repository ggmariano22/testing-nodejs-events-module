import { get } from '../repositories/orderRepo.js'
import { OrderEvents } from '../events/orderEvents.js'

const em = new OrderEvents();

export const create = (orderInput) => {
    em.dispatch('store_order', orderInput)
}

export const show = (id) => {
    return get(id)
}