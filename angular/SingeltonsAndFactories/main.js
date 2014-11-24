;(function () {
	'use strict';
	var app = angular.module('app', []);

	/*================================================
	=            Izdelava angular servisa           =
	================================================*/
	
	
	app.service("CountService", CountService);
	//Created a new service services 
	function CountService () {
		this.number = 0;
		this.count = function() {
			return ++this.number;
		}
	}

	// Ustvarjanje controlerja
	app.controller('AngularService', function( $scope, CountService ) {
		$scope.desc = "Click event with angular service";
		$scope.count = function() {
			alert(CountService.count());
		};
		$scope.count2 = function() {
			alert(CountService.count());
		};
	});

	/*================================================
	=            Izdelava factory servisa            =
	================================================*/

	app.factory('testFactory', function() {
		var count = 0;
		return {
			count: function() {
				return ++count;
			}
		}
	});	

	// Ustvarjanje controlerja
	app.controller('AngularFactory', function( $scope, testFactory ) {
		$scope.desc = "Click event with angular factory";
		$scope.count = function() {
			alert(testFactory.count());
		};
		$scope.count2 = function() {
			alert(testFactory.count());
		};
	});
	
	
	
	



}());