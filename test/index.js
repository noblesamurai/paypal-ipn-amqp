var expect = require('expect.js'),
    paypalIpn = require('..');

describe('paypal-ipn', function() {
  it('should say hello', function(done) {
    expect(paypalIpn()).to.equal('Hello, world');
    done();
  });
});
