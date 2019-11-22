module.exports = function() {
  this.Before({tags: ["@iot"]}, function (callback) {
    this.service = new this.AWS.Iot();
    callback();
  });

  // Add step definitions
};
