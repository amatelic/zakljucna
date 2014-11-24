;(function () {
	'use strict';
	var app = angular.module('app', []);

	// Ustvarjanje controlerja
	app.controller('Theme', function( $scope ) {
		$scope.name = "anze";
	});
	app.controller('List', function( $scope ) {
		$scope.lists = [
			{
				id:1,
				name: "Tomaz"
			},
			{
				id:2,
				name: "Teja"
			}
		]
	});	
}());