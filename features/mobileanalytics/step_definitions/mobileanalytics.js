module.exports = function() {
  this.Before("@mobileanalytics", function () {
    this.service = new this.AWS.MobileAnalytics();
  });

  // Add step definitions
};
