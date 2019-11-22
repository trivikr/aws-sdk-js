module.exports = function() {
  this.Before("@machinelearning", function () {
    this.service = new this.AWS.MachineLearning();
  });

  // Add step definitions
};
