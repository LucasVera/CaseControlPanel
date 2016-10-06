'use strict';

/**
 * @ngdoc function
 * @name panelApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the panelApp
 */
angular.module('panelApp')
  .controller('DetailsCtrl', ['$scope', '$routeParams', 'panelFactory', function ($scope, $routeParams, panelFactory) {

  	$scope.test = 'This is the details view';

  	$scope.currentCaseId = $routeParams.caseId;

  	$scope.showTransactions = false;
  	$scope.transactionsMsg = 'Cargando';

  	$scope.timeTransactions = panelFactory.getTimeTransactions().get({caseId: $scope.currentCaseId}).$promise.then(
  		function(response){
  			$scope.timeTransactions = response;
  			$scope.showTransactions = true;
  		},
  		function(response){
  			$scope.transactionsMsg = 'Error: ' + response.status + ' ' + response.statusText;
  		});

  }]);
