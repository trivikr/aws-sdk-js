module.exports = function() {
  this.Before({tags: ["@codedeploy"]}, function (callback) {
    this.service = new this.AWS.CodeDeploy();
    callback();
  });

  // Add step definitions
};
