module.exports = function() {
  this.Before({tags: ["@inspector"]}, function (callback) {
    this.service = new this.AWS.Inspector({region: 'us-west-2'});
    callback();
  });

  // Add step definitions
};
