(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersUpdateController', ProvidersUpdateController);

  /** @ngInject */
  function ProvidersUpdateController(Provider, $stateParams,  $state, $scope, toastr) {

    $scope.providesOptions = ["Diabetes Care","Dialysis","Medication Management","Outpatient Therapy","Oxygen","Physical Therapy","Speech Therapy","Wound Care"]

    // load the provider we want to edit
    $scope.getProvider = function() {
      $scope.provider = Provider.get({ id: $stateParams.id });
    };

    $scope.getProvider();

    $scope.updateProvider = function() {
      $scope.provider.$update(function() {
        $state.go('providerIndex');
        toastr.success($scope.provider.name + " provider has been updated!")
      });
    };
    }
})();
