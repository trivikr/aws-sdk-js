module.exports = function() {
  this.Before("@ecs", function () {
    this.service = new this.AWS.ECS();
  });

  // Add step definitions
};
