;(function () {
	'use strict';
	var app = angular.module('app', []);

	/*================================================
	=            Izdelava angular servisa           =
	================================================*/
	
	

	// Ustvarjanje controlerja
	app.controller('Templates', function( $scope ) {
		this.desc = "Click event with angular service";
		this.users = [
			{
				name: 'anze'
			},
			{
				name: 'matej'
			}

		];
		this.createNewUser = function ( user ) {
			this.users.push( {name: user} );
		},
		this.delete = function (value, index) {
			console.log(index);
			this.users.splice(index, 1); 
		}
	});

}());