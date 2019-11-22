module.exports = function() {
  this.Before("@cloudwatchlogs", function () {
    this.service = new this.AWS.CloudWatchLogs();
  });

  this.Given(/^I create a CloudWatch logGroup with prefix "([^"]*)"$/, function (prefix, callback) {
    var expectErr = prefix === "" ? false : undefined;
    this.logGroupName = this.uniqueName(prefix);
    this.request(null, 'createLogGroup', {logGroupName: this.logGroupName}, callback, expectErr);
  });

  this.Given(/^I list the CloudWatch logGroups$/, function () {
    this.request(null, 'describeLogGroups', {}, callback);
  });

  this.Then(/^the list should contain the CloudWatch logGroup$/, function () {
    var name = this.logGroupName;
    this.assert.contains(this.data.logGroups, function(alarm) {
      return alarm.logGroupName === name;
    });
  });

  this.Then(/^I delete the CloudWatch logGroup$/, function () {
    this.request(null, 'deleteLogGroup', {logGroupName: this.logGroupName}, callback);
  });
};
