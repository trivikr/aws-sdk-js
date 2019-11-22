module.exports = function() {
  this.Before("@kms", function () {
    this.service = new this.AWS.KMS();
  });

  // Add step definitions
};
