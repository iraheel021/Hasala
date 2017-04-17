(function() {
	'use strict';

	angular
		.module('app')
		.config(routeConfig);

	function routeConfig($urlRouterProvider) {
		$urlRouterProvider.when(  /^\/?$/, function($injector){
			var $state = $injector.get("$state");
			$state.go('auth.login');
		});
		
	}
})();