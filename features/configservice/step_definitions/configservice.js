module.exports = function() {
  this.Before({tags: ["@configservice"]}, function (callback) {
    this.service = new this.AWS.ConfigService();
    callback();
  });

  // Add step definitions
};
