(function() {
  'use strict';

  // best practice to create another module for helper directives (such as `utility`) but
  // for the purpose of this exercise, it should be fine
  angular
    .module('patientCare')
    .directive('removeAnimationAfterload', removeAnimationAfterload);

  /** @ngInject */
  function removeAnimationAfterload($timeout) {
     return {
       restrict: "A",
       scope: {
        animateClass: "@"
       },
       link: function(scope, element, attrs) {
        angular.element(document).ready(function() {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

          angular.forEach(element, function(ele, ind) {
              $(ele).addClass(attrs.animateClass).one(animationEnd, function() {
                    $(ele).removeClass(attrs.animateClass);
                });
          })

        });
       }
    }
  }

})();
