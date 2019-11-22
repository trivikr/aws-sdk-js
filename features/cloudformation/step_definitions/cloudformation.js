module.exports = function() {
  this.Before("@cloudformation", function () {
    this.service = new this.AWS.CloudFormation();
  });

  this.Given(/^I create a CloudFormation stack with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.stackName = this.uniqueName(prefix);
    this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
    var params = { TemplateBody: this.templateBody, StackName: this.stackName };
    this.request(null, 'createStack', params, callback, false);
  });
};
