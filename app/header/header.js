(function(angular) {
  "use strict";

  var app = angular.module('myApp.header', []);
  
  var controller = function($scope) {
	  $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	  };
  };

  var directive = function() {
	return {
	  restrict: 'E',
	  scope: {},
	  controller: controller,
	  controllerAs: 'ctrl',
	  templateUrl: 'header/header.html',
	  replace: true
	};
  };

  app.controller('HeaderCtrl', ['$scope', '$mdSidenav', controller])
      .directive('headerToolbar', directive);
})(angular);

