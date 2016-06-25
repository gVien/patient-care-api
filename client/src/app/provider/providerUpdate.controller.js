(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersUpdateController', ProvidersUpdateController);

  /** @ngInject */
  function ProvidersUpdateController(Provider, $stateParams,  $state, $scope, toastr) {

    $scope.providesOptions = ["Diabetes Care","Dialysis","Medication Management","Outpatient Therapy","Oxygen","Physical Therapy","Speech Therapy","Wound Care"]

      Provider.get({ id: $stateParams.id }, function(provider) {
        $scope.provider = provider;
        $scope.copiedProvides = $scope.provider.provides;

        // due to Rails API `provides` as an array data structure, update needs to be reverted
        // to an object (very weird), otherwise there is some weird behavior
        $scope.provider.provides = {};

        for (var i = 0; i < $scope.copiedProvides.length; i++) {
          var index = $scope.providesOptions.indexOf($scope.copiedProvides[i]);
          $scope.provider.provides[index] = $scope.copiedProvides[i];
        }

        $scope.updateProvider = function() {
          var providesArr = [];
          var providesObj = $scope.provider.provides;
          for (var key in providesObj) {
            if (providesObj.hasOwnProperty(key)) {
              providesArr.push(providesObj[key]);
            }
          }

          $scope.provider.provides = providesArr;
          console.log("updated provides: ", $scope.provider.provides)
          $scope.provider.$update(function() {
            $state.go('providerIndex');
            toastr.success($scope.provider.name + " provider has been updated!", "Updated Successfully:")
          });
        };
      });
    };
})();
