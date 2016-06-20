(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProviderController', ProviderController);

  /** @ngInject */
  function ProviderController($scope, Provider) {
    var vm = this;
    vm.providers = Provider.query();
  }
})();
