module.exports = function() {
  this.Before("@acm", function () {
    this.service = new this.AWS.ACM();
  });

  // Add step definitions
};
