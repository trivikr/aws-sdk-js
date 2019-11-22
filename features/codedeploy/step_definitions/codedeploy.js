module.exports = function() {
  this.Before('@codedeploy', function (callback) {
    this.service = new this.AWS.CodeDeploy();
  });

  // Add step definitions
};
