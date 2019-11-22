module.exports = function() {
  this.Before({tags: ["@dynamodbstreams"]}, function (callback) {
    this.service = new this.AWS.DynamoDBStreams();
    callback();
  });

  // Add step definitions
};
