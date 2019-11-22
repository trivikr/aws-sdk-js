module.exports = function() {
  this.Before({tags: ["@machinelearning"]}, function (callback) {
    this.service = new this.AWS.MachineLearning();
    callback();
  });

  // Add step definitions
};
