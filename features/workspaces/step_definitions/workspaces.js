module.exports = function() {
  this.Before("@workspaces", function () {
    this.service = new this.AWS.WorkSpaces();
  });

  // Add step definitions
};
