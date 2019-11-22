module.exports = function() {
  this.Before("@directoryservice", function () {
    this.service = new this.AWS.DirectoryService();
  });

  // Add step definitions
};
