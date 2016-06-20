(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersIndexController', ProvidersIndexController);

  /** @ngInject */
  function ProvidersIndexController(Provider, $uibModal, $state, $scope) {
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
  }
})();
