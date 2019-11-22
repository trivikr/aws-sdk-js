module.exports = function() {
  this.Before("@kinesis", function () {
    this.service = new this.AWS.Kinesis();
  });

  this.Given(/^I try to describe a stream in Kinesis$/, function(callback) {
    this.request(null, 'describeStream', {StreamName: 'XXINVALIDXX'}, callback, false);
  });
};
