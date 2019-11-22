module.exports = function() {
  this.Before("@ssm", function () {
    this.service = new this.AWS.SSM();
  });

  // Add step definitions
};
