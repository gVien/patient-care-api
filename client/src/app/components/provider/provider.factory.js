(function() {
  'use strict';

  angular
    .module('patientCare')
    .factory('Provider', ProviderFactory);

  /** @ngInject */
  function ProviderFactory($resource) {
    return $resource("/api/v1/providers/:id", { id: "@id" }, {
      update: {
        method: "PUT"
      }
    });
  }

})();
