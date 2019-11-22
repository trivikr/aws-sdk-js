module.exports = function() {
  this.Before("@gamelift", function () {
    this.service = new this.AWS.GameLift();
  });

  // Add step definitions
};
