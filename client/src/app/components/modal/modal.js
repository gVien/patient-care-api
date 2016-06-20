(function() {
  'use strict';

  // might be better to create a "utility" module here for modal but
  // for purpose of this project, it is fine
  angular
    .module('patientCare')
    .controller('ModalCtrl', ModalController);

  /** @ngInject */
  function ModalController($uibModalInstance) {
    var vm = this;

    vm.close = function() {
      $uibModalInstance.close();
    };
  }
})();