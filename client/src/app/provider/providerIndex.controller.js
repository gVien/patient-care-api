(function() {
  'use strict';

  angular
    .module('patientCare')
    .controller('ProvidersIndexController', ProvidersIndexController);

  /** @ngInject */
  function ProvidersIndexController(Provider, $uibModal, $state, $scope, $window, toastr, SweetAlert) {
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

      SweetAlert.swal({
       title: "Are you sure you want to delete " + provider.name +"?",
       text: "You will not be able to recover this provider!",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
       cancelButtonText: "No, cancel it!",
       closeOnConfirm: false,
       closeOnCancel: false },
       function(isConfirm){
         if (isConfirm) {
          provider.$delete(function() {
            vm.providers = Provider.query();  // reload data
            SweetAlert.swal("Deleted!", "The provider has been deleted!", "success");
            // toastr.success(provider.name + " provider has been deleted!", "Deleted Successfully:");
          });
        } else {
          SweetAlert.swal("Cancelled", "Your provider is not deleted!", "error");
        }
      });
    }
  }
})();
