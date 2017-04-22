(function() {
	'use strict';

	angular
		.module('app')
		.config(config)
		.controller("AdminNGOController", AdminNGOController);

	function config($stateProvider) {
		$stateProvider.state('admin.ngo', {
			url: '/ngo',
			templateUrl: 'app/admin/ngo/ngo.html',
			controller: "AdminNGOController"
		})
	}

	function AdminNGOController($scope) {
		
		$scope.ngo = {
			content : [{
				type: "title",
				data: "My NGO"
			}, {
				type: "text",
				data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
			}]
		}

		$scope.addContent = function(type) {
			$scope.ngo.content = $scope.ngo.content || [];

			var content = {
				type: type,
				data: "",
				edit: true
			};

			if(type == 'image') {
				content.data = 'assets/placeholder.png';
			}

			$scope.ngo.content.push(content);

		}

		$scope.editContent = function(index) {
			$scope.ngo.content[index].edit = true;
		}

		$scope.deleteContent = function(index) {
			$scope.ngo.content.splice(index, 1);
		}
	}

})();