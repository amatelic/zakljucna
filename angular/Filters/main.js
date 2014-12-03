;(function () {
	'use strict';
	var app = angular.module('app', []);
	app.controller('Filters', function($scope) {
		$scope.date = (new Date()).getDate();
		$scope.myObject = {
			a: "test",
			b: 1
		},
		$scope.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	});
}());