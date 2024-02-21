// queueHandler.js
class QueueHandler {
    constructor() {
        this.queue = [];
    }

    addOrder(order) {
        this.queue.push(order);
        console.log(`[Log] Order added to the queue: ${order}`);
        this.printQueue();
    }

    printQueue() {
        console.log('[Log] Current Queue:', this.queue);
    }

    async processQueue() {
        while (this.queue.length > 0) {
            const order = this.queue.shift();
            const processingTime = Math.floor(Math.random() * 10) + 1;

            console.log(`[Log] Processing ${order}...`);

            await new Promise(resolve => setTimeout(resolve, processingTime * 1000));

            console.log(`[Log] ${order} Done in ${processingTime} seconds`);
        }
    }
}

module.exports = QueueHandler;