module.exports = function() {
  this.Before("@elbv2", function () {
    this.service = new this.AWS.ELBv2();
  });

  // Add step definitions
};
