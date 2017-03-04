'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
  .controller('MainController',[ '$scope',function ($scope) {
      console.log('main saying hi');
      $scope.x = 'kareem';
      this.x = 'prop';
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
