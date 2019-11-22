module.exports = function () {

  this.Before('@s3', function () {
    this.service = this.s3 = new this.AWS.S3({maxRetries: 100});
  });

};
