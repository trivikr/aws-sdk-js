module.exports = function() {
  this.Before("@ecr", function () {
    this.service = new this.AWS.ECR();
  });

  // Add step definitions
};
