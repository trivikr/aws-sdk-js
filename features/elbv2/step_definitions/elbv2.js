module.exports = function() {
  this.Before({tags: ["@elbv2"]}, function (callback) {
    this.service = new this.AWS.ELBv2();
    callback();
  });

  // Add step definitions
};
