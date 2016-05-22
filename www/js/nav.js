var colinApp = angular.module('colinApp.navController', ['ngRoute'])

.controller('navController', function($scope, $location, $ngRoute) {

	$log.log($routeParams);	

});