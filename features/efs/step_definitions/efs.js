module.exports = function() {
  this.Before({tags: ["@efs"]}, function (callback) {
    this.service = new this.AWS.EFS({region: 'us-west-2'});
    callback();
  });
};
