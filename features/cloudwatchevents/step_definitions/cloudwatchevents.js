module.exports = function() {
  this.Before("@cloudwatchevents", function () {
    this.service = new this.AWS.CloudWatchEvents();
  });

  // Add step definitions
};
