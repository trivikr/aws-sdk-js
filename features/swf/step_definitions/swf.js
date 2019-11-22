module.exports = function() {
  this.Before({tags: ["@swf"]}, function (callback) {
    this.service = new this.AWS.SWF();
    callback();
  });
};
