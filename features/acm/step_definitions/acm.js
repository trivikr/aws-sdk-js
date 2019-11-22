module.exports = function() {
  this.Before({tags: ["@acm"]}, function (callback) {
    this.service = new this.AWS.ACM();
    callback();
  });

  // Add step definitions
};
