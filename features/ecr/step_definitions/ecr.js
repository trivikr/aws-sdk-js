module.exports = function() {
  this.Before('@ecr', function (callback) {
    this.service = new this.AWS.ECR();
  });

  // Add step definitions
};
