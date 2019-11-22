module.exports = function() {
  this.Before('@directoryservice', function (callback) {
    this.service = new this.AWS.DirectoryService();
  });

  // Add step definitions
};
