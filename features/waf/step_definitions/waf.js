module.exports = function() {
  this.Before("@waf", function () {
    this.service = new this.AWS.WAF();
  });

  // Add step definitions
};
