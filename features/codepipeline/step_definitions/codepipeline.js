module.exports = function() {
  this.Before('@codepipeline', function (callback) {
    this.service = new this.AWS.CodePipeline({region: 'us-east-1'});
  });

  // Add step definitions
};
