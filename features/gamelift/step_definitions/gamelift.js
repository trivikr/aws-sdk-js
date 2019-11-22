module.exports = function() {
  this.Before({tags: ["@gamelift"]}, function (callback) {
    this.service = new this.AWS.GameLift();
    callback();
  });

  // Add step definitions
};
