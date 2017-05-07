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

	function AuthController($rootScope, $translate) {
		$rootScope.site_lang = localStorage.getItem('lang') || 'eng';

		$rootScope.changeLanguage = function (key) {
			$rootScope.site_lang = key;
		    $translate.use(key);

		    localStorage.setItem("lang", key);
		};
	}
})();