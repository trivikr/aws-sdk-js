module.exports = function() {
  this.Before('@dynamodbstreams', function (callback) {
    this.service = new this.AWS.DynamoDBStreams();
  });

  // Add step definitions
};
