module.exports = function() {
  this.Before({tags: ["@es"]}, function (callback) {
    this.service = new this.AWS.ES();
    callback();
  });

  // Add step definitions
};
