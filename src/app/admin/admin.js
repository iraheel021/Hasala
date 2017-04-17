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

	function AdminController() {

	}

})();