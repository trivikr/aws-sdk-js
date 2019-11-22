module.exports = function() {
  this.Before('@gamelift', function (callback) {
    this.service = new this.AWS.GameLift();
  });

  // Add step definitions
};
