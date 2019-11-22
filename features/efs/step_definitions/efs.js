module.exports = function() {
  this.Before('@efs', function () {
    this.service = new this.AWS.EFS({region: 'us-west-2'});
  });
};
