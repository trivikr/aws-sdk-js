module.exports = function () {

  this.Before({tags: ["@s3"]}, function (callback) {
    this.service = this.s3 = new this.AWS.S3({maxRetries: 100});
    callback();
  });

};
