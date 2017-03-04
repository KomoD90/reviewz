'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('LoginController', ['$scope', '$state','$window' ,function ($scope, $state,$window) {
        $scope.resto = {}
        $scope.submitForm = function () {
            $scope.resto.loc = $window.loc;
            console.log($scope.resto);
            $scope.resto.image = 'http://placekitten.com/g/80/80';
            restoFactory.addResto($scope.resto);
            $scope.resto = {};
            $state.transitionTo('app.restaurants');
        }
        


  }]);
