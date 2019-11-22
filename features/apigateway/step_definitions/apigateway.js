module.exports = function() {
  this.Before('@apigateway', function (callback) {
    this.service = new this.AWS.APIGateway();
  });

  // Add step definitions
};
