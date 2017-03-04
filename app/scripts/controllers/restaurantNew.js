'use strict';

/**
 * @ngdoc function
 * @name meantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meantodoApp
 */
angular.module('meantodoApp')
    .controller('RestaurantNewController', ['$scope', '$state', '$window', 'restoFactory','Upload', function ($scope, $state, $window, restoFactory,Upload) {
        $scope.resto = {}
        $scope.submitForm = function (picfile) {
            $scope.resto.loc = $window.loc;
            $scope.resto.image = picfile;
            console.log($scope.resto);
            restoFactory.save($scope.resto,function(response){
                console.log(response);
            });
            $scope.resto = {};
            //ngdialog to show respnse status (successfully created or other wise then on approval you transition to)
            $state.transitionTo('app.restaurants');
        }

        



    }]);
