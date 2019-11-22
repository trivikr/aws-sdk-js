module.exports = function() {
  this.Before("@configservice", function () {
    this.service = new this.AWS.ConfigService();
  });

  // Add step definitions
};
