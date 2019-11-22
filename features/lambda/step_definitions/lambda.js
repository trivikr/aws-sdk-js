module.exports = function() {
  this.Before({tags: ["@lambda"]}, function (callback) {
    this.service = new this.AWS.Lambda();
    callback();
  });

  // Add step definitions
};
