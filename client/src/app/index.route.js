(function() {
  'use strict';

  angular
    .module('patientCare')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('providerIndex', {
        url: '/',
        templateUrl: 'app/provider/provider.html',
        controller: 'ProviderController',
        controllerAs: 'provider'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
