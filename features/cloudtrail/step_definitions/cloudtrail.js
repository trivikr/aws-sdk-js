module.exports = function() {
  this.Before("@cloudtrail", function () {
    this.service = new this.AWS.CloudTrail();
  });

  this.Given(/^I describe trails$/, function(callback) {
    this.request(null, 'describeTrails', {}, callback);
  });

  this.Given(/^I create a trail with an invalid name$/, function(callback) {
    this.request(null, 'createTrail', {Name: '', S3BucketName: ''}, callback, false);
  });
};
