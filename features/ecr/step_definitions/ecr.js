module.exports = function() {
  this.Before({tags: ["@ecr"]}, function (callback) {
    this.service = new this.AWS.ECR();
    callback();
  });

  // Add step definitions
};
