module.exports = function() {
  this.Before("@sqs", function () {
    this.service = new this.AWS.SQS({region: 'us-east-1'});
    this.createdQueues = [];
  });
};
