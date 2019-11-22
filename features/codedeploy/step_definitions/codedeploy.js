module.exports = function() {
  this.Before("@codedeploy", function () {
    this.service = new this.AWS.CodeDeploy();
  });

  // Add step definitions
};
