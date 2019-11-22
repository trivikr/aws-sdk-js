module.exports = function() {
  this.Before({tags: ["@codepipeline"]}, function (callback) {
    this.service = new this.AWS.CodePipeline({region: 'us-east-1'});
    callback();
  });

  // Add step definitions
};
