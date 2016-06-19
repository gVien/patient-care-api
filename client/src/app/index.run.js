(function() {
  'use strict';

  angular
    .module('patientCare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
