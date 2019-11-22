module.exports = function() {
  this.Before({tags: ["@workspaces"]}, function (callback) {
    this.service = new this.AWS.WorkSpaces();
    callback();
  });

  // Add step definitions
};
