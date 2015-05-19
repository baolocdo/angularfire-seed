(function(angular) {
  "use strict";

  var app = angular.module('myApp.navigation', []);

  var directive = app.directive('navigationBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'navigation/navigation.html',
      replace: true
    };
  });
})(angular);

