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
		$scope.desc_edit = false;
		$scope.updates_lang = 'eng';

		$scope.hasala = {
			title: "Children healthcare in Asyout",
			description_eng: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			description_ar: "أبجد هوز هو مجرد دمية النص من صناعة الطباعة والتنضيد. وكان أبجد هوز نص الدمية القياسية في هذه الصناعة من أي وقت مضى منذ 1500s، عندما استغرقت طابعة غير معروفة المطبخ من نوع وسارعت لجعل كتاب عينة نوع.",
			donations: 100349,
			category: "Health"
		};

		$scope.milestones = [];
		for(var i=0; i< 5; i++) {
			var milestone = {
				title: "Children healthcare in Asyout",
				description_eng: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				description_ar: "أبجد هوز هو مجرد دمية النص من صناعة الطباعة والتنضيد. وكان أبجد هوز نص الدمية القياسية في هذه الصناعة من أي وقت مضى منذ 1500s، عندما استغرقت طابعة غير معروفة المطبخ من نوع وسارعت لجعل كتاب عينة نوع.",
				target: 20000,
				finished: i < 2 ? true: false 
			};
			$scope.milestones.push(milestone);
		}

		$('#hasala-desc-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

		$('#update-hasala-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

		$('#hasala-milestone-tabs a').click(function (e) {
		  	e.preventDefault()
		  	$(this).tab('show')
		})

		$scope.toggle = function(variable) {
			$scope[variable] =! $scope[variable];
		}

		$scope.changeUpdatesLang = function(lang) {
			$scope.updates_lang = lang;
		}

		$scope.markFinished = function(index) {
			$scope.milestones[index].finished = true;
		}

		$scope.terminateHasala = function() {

		}
	}

})();