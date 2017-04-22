(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AdminStartController", AdminStartController);

	function config($stateProvider) {
		$stateProvider.state('admin.start', {
			url: '/start',
			templateUrl: 'app/admin/start/start.html',
			controller: "AdminStartController"
		})
	}

	function AdminStartController($scope) {
		
		$('#milestone-title-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

		$('#milestone-desc-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

	}

})();