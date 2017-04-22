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

	function AdminHomeController($scope) {
		$('#update-hasala-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

		// $('#all-hasalas-tabs a').click(function (e) {
		//   	e.preventDefault()
		//   	$(this).tab('show')
		// })

		$scope.hasalas = [];

		for(var i=0; i<6; i++) {
			var hasala = {};
			hasala.id = i;
			hasala.title = 'Haga Soraya Vegetable Business';
			hasala.weeks_left = 2;
			hasala.total_milestones = 5;
			hasala.completed_milestones = 2;
			hasala.content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
			hasala.progress = 65;
			hasala.donations = 100349;
			$scope.hasalas.push(hasala);
		}

		$scope.sub_cat = 'all';
		$scope.hasala_tab = 'all-hasalas';
	}

})();