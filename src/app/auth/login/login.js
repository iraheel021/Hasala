(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AuthLoginController", AuthLoginController);

	function config($stateProvider) {
		$stateProvider.state('auth.login', {
			url: '/login',
			templateUrl: 'app/auth/login/login.html',
			controller: "AuthLoginController"
		})
	}

	function AuthLoginController($scope, $state) {
		
		$scope.login = function() {

			$state.go('admin.home');
		}
	}
})();