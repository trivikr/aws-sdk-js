module.exports = function() {
  this.Before("@iot", function () {
    this.service = new this.AWS.Iot();
  });

  // Add step definitions
};
