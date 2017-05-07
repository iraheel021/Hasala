(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AdminController", AdminController);

	function config($stateProvider) {
		$stateProvider.state('admin', {
			abstract: true,
			templateUrl: 'app/admin/admin.html',
			controller: "AdminController"
		})
	}

	function AdminController($rootScope, $translate) {
		$rootScope.site_lang = localStorage.getItem('lang') || 'eng';

		$rootScope.changeLanguage = function (key) {
			$rootScope.site_lang = key;
		    $translate.use(key);

		    localStorage.setItem("lang", key);
		};
	}

})();