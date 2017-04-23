(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AdminHasalaController", AdminHasalaController);

	function config($stateProvider) {
		$stateProvider.state('admin.hasala', {
			url: '/hasala/:id',
			templateUrl: 'app/admin/hasala/hasala.html',
			controller: "AdminHasalaController"
		})
	}

	function AdminHasalaController($scope) {
		$scope.title_edit = false;
		$scope.desc_edit_ar = false;
		$scope.desc_edit_eng = false;

		$scope.hasala = {
			title: "Children healthcare in Asyout",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			donations: 100349,
			category: "Health"
		};


		$scope.toggle = function(variable) {
			$scope[variable] =! $scope[variable];
		}

		$scope.terminateHasala = function() {

		}
	}

})();