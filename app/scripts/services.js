'use strict';

angular.module('panelApp')
	.constant('baseURL', 'http://192.168.0.3:3000/')
	.service('panelFactory', ['$resource', 'baseURL', function($resource, baseURL) {

		this.getOrders = function(){
			return $resource(baseURL + 'orders/:caseId');
		};

		this.getTimeTransactions = function(){
			return $resource(baseURL + 'timeTransactions/:caseId');
		};

	}]);

