module.exports = {
  amqp: {
    url: process.env.AMQP_URL || 'amqp://guest:guest@localhost',
    exchange: process.env.AMQP_EXCHANGE || 'test',
    queues: {
      publish: [{
        name: process.env.AMQP_QUEUE_NAME || 'ipn.event.sandbox',
        routingKey: process.env.AMQP_QUEUE_ROUTING_KEY || 'ipn.event.sandbox'
      }]
    }
  }
};

// vim: set et sw=2 ts=2 colorcolumn=80:
