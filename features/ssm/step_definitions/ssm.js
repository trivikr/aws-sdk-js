module.exports = function() {
  this.Before({tags: ["@ssm"]}, function (callback) {
    this.service = new this.AWS.SSM();
    callback();
  });

  // Add step definitions
};
