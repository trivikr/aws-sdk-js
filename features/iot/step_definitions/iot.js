module.exports = function() {
  this.Before('@iot', function (callback) {
    this.service = new this.AWS.Iot();
  });

  // Add step definitions
};
