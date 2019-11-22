module.exports = function() {
  this.Before("@apigateway", function () {
    this.service = new this.AWS.APIGateway();
  });

  // Add step definitions
};
