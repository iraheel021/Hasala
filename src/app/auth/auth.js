(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AuthController", AuthController);

	function config($stateProvider) {
		$stateProvider.state('auth', {
			abstract: true,
			templateUrl: 'app/auth/auth.html',
			controller: "AuthController"
		})
	}

	function AuthController() {

	}
})();