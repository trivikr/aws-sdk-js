module.exports = function() {
  this.Before("@workspaces", function (callback) {
    this.service = new this.AWS.WorkSpaces();
  });

  // Add step definitions
};
