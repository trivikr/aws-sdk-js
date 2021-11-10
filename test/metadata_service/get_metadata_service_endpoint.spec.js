var helpers = require('./../helpers');

var Endpoint = require('../../lib/metadata_service/endpoint');
var EndpointMode = require('../../lib/metadata_service/endpoint_mode');
var ENDPOINT_CONFIG_OPTIONS = require('../../lib/metadata_service/endpoint_config_options').ENDPOINT_CONFIG_OPTIONS;

var AWS = helpers.AWS;

if (AWS.util.isNode()) {
  describe('getMetadataServiceEndpoint', function() {
    describe('when endpoint is defined', function() {
      it('returns endpoint', function() {
        var mockEndpoint = 'http://127.0.0.1';
        helpers.spyOn(AWS.util, 'loadConfig').andReturn(mockEndpoint);
        var metadata_service = new AWS.MetadataService();
        expect(metadata_service.endpoint).to.equal(mockEndpoint);
      });
    });

    describe('when endpoint is not defined', function() {
      [
        [Endpoint.IPv4, EndpointMode.IPv4],
        [Endpoint.IPv6, EndpointMode.IPv6],
      ].forEach(function([endpoint, endpointMode]) {
        it('returns endpoint:'+ endpoint + ' for endpointMode:' + endpointMode, function() {
          helpers.spyOn(AWS.util, 'loadConfig').andCallFake(function(options) {
            if (options === ENDPOINT_CONFIG_OPTIONS) {
              return undefined;
            } else {
              return endpointMode;
            }
          });
          var metadata_service = new AWS.MetadataService();
          expect(metadata_service.endpoint).to.equal(endpoint);
        });
      });

      it('throws error for invalid endpointMode:invalid', function() {
        const invalidEndpointMode = 'invalid';
        helpers.spyOn(AWS.util, 'loadConfig').andCallFake(function(options) {
          if (options === ENDPOINT_CONFIG_OPTIONS) {
            return undefined;
          } else {
            return invalidEndpointMode;
          }
        });
        expect(function() {
          new AWS.MetadataService();
        }).to['throw']('Unsupported endpoint mode: ' + invalidEndpointMode);
      });
    });
  });
}
