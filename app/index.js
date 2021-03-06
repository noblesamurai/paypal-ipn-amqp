var express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    amqp = require('amqp-wrapper')(config.amqp),
    ipn = require('paypal-ipn');

var app = express().use(bodyParser.urlencoded());

app.post('/', function(req, res) {
  // Must respond to PayPal IPN request with an empty 200 first.
  res.status(200).end();

  // Posts back to Paypal to let them know we got this OK.
  ipn.verify(req.body, function callback(err, msg) {
    if (err) {
      console.error(msg);
    } else {
      // PayPal have told us all is OK.
      amqp.publishToQueue(config.amqp.queues.publish[0].name, req.body);
    }
  });
});

amqp.connect(amqpConnectDone);

function amqpConnectDone(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  var listener = app.listen(config.port || process.env.PORT);
  console.log('Listening on port %d', listener.address().port);
}

// vim: set et sw=2 ts=2 colorcolumn=80:
