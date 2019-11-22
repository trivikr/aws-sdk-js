module.exports = function() {
  this.Before("@es", function () {
    this.service = new this.AWS.ES();
  });

  // Add step definitions
};
