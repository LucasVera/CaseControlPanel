'use strict';

/**
 * @ngdoc function
 * @name caseControlPanelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caseControlPanelApp
 */
angular.module('panelApp')
  .controller('MainCtrl', ['$scope', '$interval', 'panelFactory', function($scope, $interval, panelFactory) {

  	$scope.showOrders = false;
  	$scope.ordersMsg = 'Cargando...';
  	$scope.orders={};

	$scope.doUpdateData = function(){

	  	return panelFactory.getOrders().query(
	  		function(response){
	  			$scope.orders = response;
	  			$scope.showOrders = true;
	  		},
	  		function(response){
	  			$scope.ordersMsg = 'Error: ' + response.status + ' ' + response.statusText;
	  			$scope.showOrders = false;
	  		});
  	}

  	$scope.doUpdateData();

  	$interval(function(){ $scope.doUpdateData(); }, 60000);

  }]);
