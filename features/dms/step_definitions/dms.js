module.exports = function() {
  this.Before("@dms", function (callback) {
    this.service = new this.AWS.DMS();
  });

  // Add step definitions
};
