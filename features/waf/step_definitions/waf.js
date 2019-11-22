module.exports = function() {
  this.Before({tags: ["@waf"]}, function (callback) {
    this.service = new this.AWS.WAF();
    callback();
  });

  // Add step definitions
};
