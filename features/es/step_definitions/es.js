module.exports = function() {
  this.Before('@es', function (callback) {
    this.service = new this.AWS.ES();
  });

  // Add step definitions
};
