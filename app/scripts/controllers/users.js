'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:UsersController
 * @description
 * # UsersController
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('UsersController', ['$scope', '$state', 'userFactory', function ($scope, $state, userFactory) {
        
        console.log("users controller saying hi");
        $scope.users = userFactory.query();
  }]);
