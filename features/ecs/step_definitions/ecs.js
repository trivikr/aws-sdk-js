module.exports = function() {
  this.Before('@ecs', function (callback) {
    this.service = new this.AWS.ECS();
  });

  // Add step definitions
};
