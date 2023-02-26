import { EventEmitter } from 'node:events'
import { store } from '../repositories/orderRepo.js'

export class OrderEvents extends EventEmitter {
    constructor() {
        super()
        this.createStoreListener()
        this.createErrorListener()
    }

    dispatch(event, ...args) {
        switch (event) {
            case 'store_order':
                this.emit('store_order', ...args);
                break;
            default:
                this.emit('error', new Error(`Event ${event} does not exist.` ));
        }
    }

    createStoreListener() {
        this.on('store_order', (order) => {
            //this will dispatch event async
            setImmediate(() => {
                store(order)
            })
        })
    }

    createErrorListener() {
        this.on('error', (error) => {
            console.error(error.message)
        })
    }
}