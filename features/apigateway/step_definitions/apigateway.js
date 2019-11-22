module.exports = function() {
  this.Before({tags: ["@apigateway"]}, function (callback) {
    this.service = new this.AWS.APIGateway();
    callback();
  });

  // Add step definitions
};
