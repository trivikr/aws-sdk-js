module.exports = function() {
  this.Before('@swf', function () {
    this.service = new this.AWS.SWF();
  });
};
