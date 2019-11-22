module.exports = function() {
  this.Before({tags: ["@ecs"]}, function (callback) {
    this.service = new this.AWS.ECS();
    callback();
  });

  // Add step definitions
};
