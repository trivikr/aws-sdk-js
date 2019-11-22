module.exports = function() {
  this.Before("@inspector", function () {
    this.service = new this.AWS.Inspector({region: 'us-west-2'});
  });

  // Add step definitions
};
