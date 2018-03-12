'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApiGroup = require('kubernetes-client/lib/api-group');

var OApi = function (_ApiGroup) {
  _inherits(OApi, _ApiGroup);

  function OApi(options) {
    _classCallCheck(this, OApi);

    var commonResources = ['buildconfigs', 'deploymentconfigs', 'deploymentconfigrollbacks', 'routes', 'imagestreams', 'imagestreamtags', 'projects', 'customresourcedefinitions'
    // TODO: add more resources
    ];

    options = Object.assign({}, options, {
      path: 'oapi',
      version: options.version || 'v1',
      // TODO: add any custom resource implementations
      groupResources: commonResources,
      // TODO: add any custom resource implementations
      namespaceResources: commonResources
    });
    return _possibleConstructorReturn(this, (OApi.__proto__ || Object.getPrototypeOf(OApi)).call(this, options));
  }

  return OApi;
}(ApiGroup);

module.exports = OApi;