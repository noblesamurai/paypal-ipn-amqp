module.exports = {
  amqp: {
    url: process.env.AMQP_URL || 'amqp://guest:guest@localhost',
    exchange: process.env.AMQP_EXCHANGE || 'test',
    queues: {
      publish: [{
        name: process.env.QUEUE_NAME || 'ipn.event.sandbox',
        routingKey: config.amqp.queue.routingKey || 'ipn.event.sandbox'
      }]
    }
  }
};

// vim: set et sw=2 ts=2 colorcolumn=80:
