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
        controller: 'ProvidersIndexController',
        controllerAs: 'provider'
      })
      .state('createProvider', {
        url: '/providers/new',
        templateUrl: 'app/provider/providerCreate.html',
        controller: 'ProvidersCreateController',
        controllerAs: 'providerCreate'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
