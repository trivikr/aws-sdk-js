module.exports = function() {
  this.Before("@dms", function () {
    this.service = new this.AWS.DMS();
  });

  // Add step definitions
};
