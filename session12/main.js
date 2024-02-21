// main.js
const QueueHandler = require('./queueHandler');

const queueHandler = new QueueHandler();

// Add orders to the queue
queueHandler.addOrder('Order 1');
queueHandler.addOrder('Order 2');
queueHandler.addOrder('Order 3');
queueHandler.addOrder('Order 4');

// Run process -> process queue based on random interval
queueHandler.processQueue();