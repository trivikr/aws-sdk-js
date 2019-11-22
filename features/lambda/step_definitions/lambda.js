module.exports = function() {
  this.Before("@lambda", function () {
    this.service = new this.AWS.Lambda();
  });

  // Add step definitions
};
