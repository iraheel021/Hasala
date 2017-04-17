(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AdminHomeController", AdminHomeController);

	function config($stateProvider) {
		$stateProvider.state('admin.home', {
			url: '/home',
			templateUrl: 'app/admin/home/home.html',
			controller: "AdminHomeController"
		})
	}

	function AdminHomeController() {
		$('#update-hasala-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})
	}

})();