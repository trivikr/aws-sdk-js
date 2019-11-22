module.exports = function() {
  this.Before("@dynamodbstreams", function () {
    this.service = new this.AWS.DynamoDBStreams();
  });

  // Add step definitions
};
