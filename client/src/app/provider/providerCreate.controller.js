(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersCreateController', ProvidersCreateController);

  /** @ngInject */
  function ProvidersCreateController(Provider, $state, $scope) {
    var vm = this;

    vm.providesOptions = ["Diabetes Care","Dialysis","Medication Management","Outpatient Therapy","Oxygen","Physical Therapy","Speech Therapy","Wound Care"]

    $scope.provider = new Provider();

    $scope.addProvider = function() {

      // reformat data to send to server
      // since the server only accepts `provider.provides` as an array
      // but the checkbox is giving an object
      var providesArr = [];
      var providesObj = $scope.provider.provides;
      for (var key in providesObj) {
        providesArr.push(providesObj[key]);
      }

      $scope.provider.provides = providesArr;

      $scope.provider.$save(function() {
        $state.go('providerIndex');
      });
    };
  }
})();