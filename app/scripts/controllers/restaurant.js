'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
  .controller('RestaurantsController', [ '$scope', '$state', 'restoFactory',function ($scope,$state,restoFactory) {
      console.log($scope.x);
    $scope.restaurants =restoFactory.query();
  }]);
