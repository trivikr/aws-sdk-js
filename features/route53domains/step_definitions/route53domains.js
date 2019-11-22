module.exports = function() {
  this.Before("@route53domains", function () {
    this.service = new this.AWS.Route53Domains();
  });

  this.Given(/^I list Route53 domains$/, function () {
    this.request(null, 'listDomains', {}, callback);
  });

  this.Given(/^I try to register a Route53 domain with invalid parameters$/, function () {
    var params = {
      DomainName: 'example.com',
      DurationInYears: 1,
      AdminContact: {}, RegistrantContact: {}, TechContact: {}
    };
    this.request(null, 'registerDomain', params, callback, false);
  });
};
