(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersIndexController', ProvidersIndexController);

  /** @ngInject */
  function ProvidersIndexController(Provider, $uibModal, $state, $scope, $window, toastr) {
    var vm = this;
    vm.providers = Provider.query();

    // vm.open = function() {
    //   var modalInstance = $uibModal.open({
    //     templateUrl: "app/components/modal/modal.html",
    //     controller: "ModalCtrl",
    //     controllerAs: "modal",
    //     scope: $scope
    //   })
    // };

    // DELETE /api/v1/providers/:id
    $scope.deleteProvider = function(provider) {
      if (confirm(provider.name + " provider will be deleted. Confirm?")) {
        provider.$delete(function() {
          vm.providers = Provider.query();  // reload data
          toastr.success(provider.name + " provider has been deleted!", "Deleted Successfully:");
        });
      }
  }
  }
})();
