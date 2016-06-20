(function() {
  'use strict';

  // best practice to create another module for helper directives (such as `utility`) but
  // for the purpose of this exercise, it should be fine
  angular
    .module('patientCare')
    .directive('numberValidation', numberValidation);

  /** @ngInject */
  // better way is to use input type as `number` but it requires some reformat of
  // number generated from the seed.rb in the database
  // http://stackoverflow.com/questions/14419651/filters-on-ng-model-in-an-input/14425022#14425022
  function numberValidation() {
     return {
       require: 'ngModel',
       link: function(scope, element, attrs, modelCtrl) {
         modelCtrl.$parsers.push(function (inputValue) {

           var transformedInput = inputValue.toLowerCase().replace(/[a-z]/g, '');

           if (transformedInput!=inputValue) {
             modelCtrl.$setViewValue(transformedInput);
             modelCtrl.$render();
           }

           return transformedInput;
         });
       }
    }
  }

})();
