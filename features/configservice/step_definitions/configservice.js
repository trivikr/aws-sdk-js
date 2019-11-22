module.exports = function() {
  this.Before('@configservice', function (callback) {
    this.service = new this.AWS.ConfigService();
  });

  // Add step definitions
};
