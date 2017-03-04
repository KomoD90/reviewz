'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('HeaderController', ['$scope', '$state','ngDialog', function ($scope, $state,ngDialog) {
        $scope.stateis = function (curstate) {
            return $state.is(curstate);
        };
        $scope.clickToOpen = function () {
            ngDialog.open({
                template: 'views/popups/loginRegisterPopup.html',
                className: 'ngdialog-theme-default', 
                controller:"LoginController",
                scope: $scope
            });
           
        };
  }]);
